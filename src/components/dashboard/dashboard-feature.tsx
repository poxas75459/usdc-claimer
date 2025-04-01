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
    "4bSoqTEqk3tkhQt8ArYJqUjpNpTGRRBHKtWQE3nA1WF9ofCYYG2jEjYAzbqn6BiReJJ3BqUZeqP7LtPVCBXMSKNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hJTjbBvJTniqVFcXBrvDYzJQcZfynEVHGDgS5tYpne8t1nFvP5nMvhrvVxLePnW7gkjCpVcRyfyswiUZ1F5mGv1",
  "key1": "4oD9yRKKbfjgaQA1G9iRB3jmmUtY9XGoL3UcdiLGtEWWHSmodXAt1ZEpbDBoGFiNrJS6bvDorvHZ8C3LMw3o1YwJ",
  "key2": "uqGULfaaLDCGTyFeD6Me2Wx5xkxoLs2WXSMtxMJjjmf5GCcQp5gtYg8ovxnz5vVVHNRXQzP3m6DTfPeoavsam1a",
  "key3": "3xKq4GDDFg2iF5YjLX42PQm5KcLUbuSqxSYFmTjoa1LVCCQUxUwLzMqkzAvzYJvYL3bh6TVRXJ8ZfkpWmHhSyZdz",
  "key4": "4Ga7z5XgyQrwYViZLvmuLJkRxFbrzytdXhecjapvzYS9LarGt8MzhHiS8cs742HRR5zqjvCjbfGpJgrJKXpWqzuk",
  "key5": "5NnQRMVp8Ye7qpJZKHS7iNDXrFPjeZigBwaRxfTRTpToALwYuYmuxuMr3KSgm4XrLR2N8tp2TKzBawUrVLyxjY7M",
  "key6": "2hauF8NHyV2vmYWsffgCV5Nwr5kqaTgmGQpLAfN3dPxPKdjaBhNpaKyzvoLuVhkikyoKZwPnzuFUxe5j56zbhemM",
  "key7": "5ndRzfuUHMnSLRnGFW8ayGUq9QXacZ4hpHR6uE7E6CkmYNvcPfHniedRGjpcgZ2xa9RTCjEHntxhUrQZB1w3JuFf",
  "key8": "zp8YJCyZDeyh1FFzScvezMuV424jV1uZ6ZJKHVHEA6SzKMYJf5ZRp9pPzW4PdK7wrTcPCm4RdLL37eEKuJ2DVd2",
  "key9": "VZFp6fDCLn4xx7nX3VehNdLcuWusXuR9x7XchKdYXzyqWm8FgDPX5cZK52LHFz6gQEEfW66heUCWzGT6vED32WY",
  "key10": "2WUfkSUveT5Q8FZ4f8AGZEXxLo3Pqe6GJjdgGCanPmMWZXwFyx5EbzY8ugWFNPVsbao5FZKb4T1b2P5zGpDxghTv",
  "key11": "4LayjePCzAiejL8xRwinqegT2YtNqsVtEGQnzBnzsHMsFLr5s5BKEwMvMo95hJBJW5zCdmbUuP5SB1AcGD2gcsgx",
  "key12": "2n9rfVyf1NbitjgFp8rDRQRPyVj1xPEeCed7TeBqmLR4bEVUQek6r88AXh6QDbbvUMn8Az2wVww42RvoJ8wRFxmM",
  "key13": "36PCMyDKDuVmHg8GcVM2jSzuFYEErP6MkqubpWq2Knp1dwfBK5wbJ8hMrV92aPp2cxDv2Ns85k4R97dtLsNjpRyP",
  "key14": "55p53NyjnaU5eKNUAKrZcqCkQW3fL91AT3ryqNxxbDVAzkkuCwsWuExD1aRYx2aJ4wK78wNSjjSM49SWYEsC63Wo",
  "key15": "3jTwqcuvf783dSPJEH1X9BYK3qbdn29L6wU9MsktmBZUgMrXxrwgoAMZi3bzKMbxyLfZzBcWfgRmr17GRZTAeMEA",
  "key16": "4P9AmvJWSeW25wTgi5T8Q2YuaFr4Cyn8MNdioCQgKqhKmz2VjJnNQU9iG32hB3qXSmM9Le8GDyFRRwG4WYLwe7ns",
  "key17": "5q51fC4Ni4iMbSi2iBT4Qis2r4W9aamofcrCHTzHNqT3YXz9ThoWPm3BLExcJnn4oARpv6aCd8eDrzp3EUAV6fnJ",
  "key18": "2gBKrrGsYjAjdCvMGy7fw3MEqe9LTdXsEHsAL3MKcjS7gC8dhLMSh3YrynM7gT4wFRkvj2PQTjxA8DRaChkYP5U3",
  "key19": "5CdRyvWYuCDNnsa66fFSxvABwCsjencnmSTdPVG9JGpt5kp644cGYihZJTDfhdpXfb1FdpgFAorACBMZzWV1xX99",
  "key20": "3V6uUod9CYJ8rvgsA8HW5hjd4M1GZxVJq9pnNZSDd8HKAzNGDXtH8197LtUJgcuhPN4c5i4hfXjUtdF65kKrf4aA",
  "key21": "2GqgyJCW4yeCHn5qWubgri9cVuLBUDkVcBAdqXAJocGC62HyPMdUNkA7qeaCdNkDXJSqfYAEuEK3KQUCQRDnpv7m",
  "key22": "49uP6i6AosAaXYG8C8PMD8xQBFu7n4Y5ngcwotscxy4NF5sqMpDE36AgjN6XaAkR2V56Qcs79muQo2mGVVeYUBXu",
  "key23": "39WGLJbKkHgoQ7nVAUpAFyL6gAHLNdw34jnQfSzhJCQqRFddvsjN2nndc3sdF8x4sjE7rkkMYHpECrrv4PSsiTak",
  "key24": "4AbdLcrbw3YgUPJoNHjyDynyNR6mL6xK8ZrgUHjEyzYqyFyypH6bVSWb5LoAnJEC6QaduFHpv3hU3opRPCsUEWLw",
  "key25": "5NHpvkbUVM9zvpyPciGd6HwKYDE8MNP7sdyeM5NiJmnbnLUZiZ2LGRi75o6xKTQYnxLXUjyz3M5BrkeDy1scNfUB"
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
