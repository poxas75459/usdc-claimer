/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3GifhJ3uAfjCzaLnPctKAeKkpSXwxRv328xmV3xPeVUadvERLUnFdX7kmZi2zc5kaMMkqozteiQvyxgcLS2P4keo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XnPNGNS4tMXMTThsFdNbLPaM1z9qf65MgoDtWvGZKDPyqwJJmMDo3EUf1L74xzRgx9QAkinPcBkDTRQxfn5xMK",
  "key1": "6gUwVbpnRMu6edgY4c7VpcpwCTfNroK2wg7SkeN7ngAdWrKiGPe3SBPNm8dAUuvxPNYDQgHxtgFy5EUxjKPgap7",
  "key2": "37jajcHXHFYr6A3DLHG3RpJutnK3LwPUQCkQS6wJf42bDLnTWxorUBVcp35F3buTwFB1xSisTMxUWB7aBZF1u7FG",
  "key3": "4rKi84W4mj5ygG5GKK8dZF3FzSZmA3HhLyrYkhoCDceBgqjNfWdDnvzYTWV4zbgSgaeifu4ujHqesPSJxH7bVnjf",
  "key4": "3gSiYd2rXEZnBMZ6Fvdc3Cz3C5Ne23PZ3xnkKe9ZbHGy4eGfRQMukVrGkA2MRhBSG7mtsDkMh49am1EwMX9kyFCJ",
  "key5": "3KoXQkDMvZJeDxj35RrEJmTxTkRTj75S22mvcSv2Fh2jkJqpGGHNL2LXXoBsqfw9nxj5MBfrvTrb3ZWhFj7HbrwW",
  "key6": "3n1oAwnFzZ1ccUPKKfvbP3EdFxBexYh48HZajeHuxkgKBLWMkusSUtQX299jCXNRP3tuVUJdoFy1gUFC5h8JEMXe",
  "key7": "3jfrupyQyXagL55vg7DU97TgLTsCZA5R8VWYQPqgwBMwVcqsHvnPtwjcttuvd71jxL1e2KrXh1SVqpfdve7uQQvq",
  "key8": "3HYG7EagX2gc9wP6LSnwpnNZSgWQkyRD2zDCzW7CfJuu45GySWr3fbmfKSrTrUpgkKw7n1Uu9yXq38HDHQCjGUEh",
  "key9": "NhwKr3kn8iRnLoA92ZVkDw7iHA5EpybJyteGA8hDb9yQnAgiawVBkJGrmUNtCaS4tgUW7Q5dMDwtd8pVygKFdiz",
  "key10": "4QzDKEqSpMZKhas43PiM3D6K8r6uh7SfznyPZ9UBiufN71xKfy2FrUMhHRuythioSk2Uqsjijn7KAj4K9KZpxUty",
  "key11": "3DwYi7HQFrExzN2SX8KZnHYhHgYNddxB1BKCeY8A2BYhfxMS9Cg5FLxRfvMQp7ahkbXxNdTnBJT8DHR7QVS6t3sK",
  "key12": "5cZ6g7BTm8CA42jNgr4oix6Df9Pa3CRyj7aC71RzWgj45ZomnNVuC95Z2wMU7GvuWfEfZhPjMMB3BrrNxyuqBv4z",
  "key13": "HaNfQWwgPQaYjL4DiKe5DX3mKW2Z1ZkvA6QkpFqT4yHmXyuaQs8FLmLh9dxfWhbP7NbNKXxD1C7nwHuNPHU3yE6",
  "key14": "5MckbDipUXSttB2c8piEBCbzhcqW7FePc1txacKDfd2QdLXatggbT495TXtGC6cgpuGeQ9ou9xU4Z4VFY8MbtQWj",
  "key15": "n3StBpdPXK6AGUushC2BPL4PYsGn1YcAdYkuxAaNPiMgC5mBLaWSVLNaAVUwHHe6EvKC8brjRdCENLpgMABV4uH",
  "key16": "4h6w3yHPoqUmSUBa6ieMsVD5BrpqfguUGci1V5UTApAWQKCbuBGVKGWj2CWMdfXPkCGdxBdu42Ayj2h33sVvVm1R",
  "key17": "5xTWoVR52rgx1zRngwjW9KD4Nyj1LfxXUw8hMAxHBGkTqWGZDyhXyz3gWauwdtd6DyJKVp4YnGbjBaJPKgpp1pRk",
  "key18": "3rB7LcQxJnrXviMWQpawnZATBfwCow6Qzmn4Am2jHn81pXDWiTYuuhzCccGGUxV3cu9xiSuQFsyDudpbTHG5Aw3o",
  "key19": "5s2sTUj6f2f4wm1WYFmFYf6EKzY6RDfBNHccngntL67jEwSoKm4txoyTRBrzJGXmJkdvLA9vQEXhJghymhx2XAst",
  "key20": "gZCeGDF8pW5U9muAyiLJhk4udB4RWHa9Dbfkz4i6eUTNnC4tpgXRvxrACAEZgAf3PUnvBYKbRw93gWaKso32n7c",
  "key21": "2G3MmFRZtbd8xqE9JfkLY55ETsFLRYuFAD9Vf9H4aTNHVvWNwvfoYkVikp9417mDSyZVecwQkJXgqAVNqCnMy6qS",
  "key22": "5rizH6Xsmn3zALG9kucBZnknwNeUV8sKN3oP8eZjhDNQf8z5AELXeXCZRbbwRqPeYtee7uAuxg43Crj3a6hrVzSr",
  "key23": "2owCymvoJRAfeTxN694qW9dnMwff4A3nHTLFcnW2yDJxZPmumehVZVnzeor5fgtgZaDVgmisdQyzkM4eE1AcEG8n",
  "key24": "5XhywFEreZdfrNkfqyyvCBmkVnn7ze2BNYRxQMzhVSwCvoHxgTQN6uBADDKVP6TkVaXMTRWVnbr1ZpSY45Vkhf2J"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
