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
    "YNBroumJ3DRDPeymNqLusoVeg6zM3FqfadvaEgUM6VQzfn1cAxJDssK5g2EAoUsr8twqaqeUN1V2cqB2NdfARDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FqcJZXjdkeJjyH2Cb2tRaEEzDmifLmYnbG84J3BzmAMBvqQSAx5Y7HAMVyZu4VimnTwiCXj4HrSfqqkzuUV61Zp",
  "key1": "cfkZDJAoY3HHByLiE9f1mBuvL8PFFzMoHPsryzSa6snwQ13Txm6CfmXmAaDsPU2GBXWedU5eSDXZrpnQPKVg3nj",
  "key2": "3o4fB8vRqymUzdRuDNASp8YxgVBsjQT6f6aA64y2GbuKDSSK83F3m69aRxvJKNuxzWKsyUcjcgZ1Cz1PALkM3GPk",
  "key3": "3ZZfJ43RwDVSJpxhKdGzVJKxUdcc7qFz5W5iuKNKeYdaC6cDG5zpiWanuvmDX2nqrTEonxxfkySX9B5zmUAt1Hnf",
  "key4": "4jMJ9ev5nfWMqmw4nYN5yAtzxizKoZeE7GZxPikqeDfYt4AHQo2kndBUrs5JqjPP53UHV5fANSLLTkEUqr1bQbBd",
  "key5": "3wFjvm5tUjRiG4scUmuRxp4jVh8o6RVg84gDAfL7tZvK7J2HHoqfe6tgK6LQeaLJHyrai87uoUCEFz1ekQNWheMk",
  "key6": "2oA9xa6kqmNikEVxLEumgCzttU8pBJ3iECLmnLRtcTYExKEhVvBPx9JrnLLrqHFG88Xj73xh1RVJ4eURB1pPQxyr",
  "key7": "3gkR2K8GDtiQ8BVnEjykT72jmFYYX2KFDWaLh7U8o9L7WgNRLQx4GArzmHQVYRvyo9P4BxvFkDSSHzrXNeL8Sj4i",
  "key8": "64yyx7TGdFmjDRSZu5erYMN76fJj6LYTsZFJJg9psSSfibmee9YLFYed5q51WHh3DBtJvxeBVdqrZtWJnBdQRUeY",
  "key9": "46hej493vzd852DKUjeUBeRnome3zX1rQwm9YxujsYVYTBdeAdHZLm9gEH1iWBYhnqurnKMcEb4yzF1VeWoyb5CM",
  "key10": "3kAjPfJwQCBiFY3FATr1EyLxCKGXttXodedNfFtqgN6jGaghY2n5dxPV7Ja3BcnEgULDh9nTrEpniTepP23kZSjG",
  "key11": "43N6aZXChrw3M1bZpoUVMtYGi432aLhaG6EUvYmmu4dGoAumvjByJ7XdxK8WegiArBPynCPCmao5DGzpJ2ZSCPm8",
  "key12": "4LyyN8xN3gvtfkxSaX2Qj8DETPxRtTGesZgdusLZYBK4HKSdjewCAiXmJrhkb5oU5owW8ZX2KeopW2CZsFF12YmU",
  "key13": "2cqHrameaJB3CKW3ieB7dKueeEVyhd5N73CRzGDjybNZCqvpUHro26nSZCQB4dWsfgNtEbgfFHLCDKZfudjGEn7C",
  "key14": "2zC67a4scQ3qP2s9SZaeYgzdG9QdWuvWb39JjapNF3UFRW7QtzW3YF66iz2v4e1UVFSF7h8VmunAEh4EfQwxJKt2",
  "key15": "5XZzwZjy6bwLQBL2M88iKLs7xF31L5fPY7pEzpQZBB8BvhtW4UJ3zWAUHjzm4tiMNs2JaVsp7UXcdcKnTrxCQsF2",
  "key16": "4PyDyfChjUU1BHV2t8tmTqnBtebdiWwwBYSVzuWzCCLM2JXnDyxSeYDxD9ZG4KjZ5zYVQBX2KW3fxug5pSGZAfnw",
  "key17": "3qyFmzyYqzwuEXK81fBCa5rrEk8T877MerK7fVBzG23nVrcnEiiMp1ckXYUpkhJ7HPgU4e3EV7JQLvMbrxMapm7J",
  "key18": "HwCwfNt3zcrynR8Gkzt3Vm9N79nQhESSoE63PnXKPmiUik5JyP9HLu9Zkm8astMLFNYVvduGMMvGVzT9Nt7DQtP",
  "key19": "2Xq1FbfvMcSuCJTzBer1YXwBReHwz6fniAkuqbhS9xS8yB3xuHZ9BA7ccVzE8SYnr78TVmbABkEcq95SFEkwqPSY",
  "key20": "5wrZfTVkfPTgpmCrmEVQUD1HmP7BzP6fodoHFa57zY8zNBbBYYayuFGbC4tZBERac9G2Yp9o4pePHPypmvVJ4p1H",
  "key21": "2ddNQ9wDHPutin7tMxpfgun33oc6iJYQBrerwgFJkYVTEbNpFXiuRsVbeHtTKjkvvEdHqWFLnR3WVG8j4cdMraoP",
  "key22": "tUBC43BDUeFRzBYH7tGQC1QqdngtkLpQXTv2SrkymKMyfgM3UEF6xpxbSifpmUkRmaihu8MU49tFDe3jnz6etXj",
  "key23": "3Yz9e15MgnK7g11wmB3jZWrPkFnEExkwjRr3TfXqbL5svqVUofa1ENf5JsGL7zv3Y5N3HmQ6eoEV7TT1sCzCDXkQ",
  "key24": "5UPpPEX4nuBQ44cG4mpCf87x6Mwp9vrijG3VRv4YTaLaRGbmGT5j4cfyymsTfshcxd6mFqqjgsK58E2HqKY9BWU2",
  "key25": "dpm2E5de2PxQcadqoPbh8boLq1oATtkQPXzJN1PBjCYRdgYTKFa5BtrEUGzcoHLzVagkKNyp8cT8WwqJxDT8D8R",
  "key26": "4jPysuFTvn3BX1qD48jPeXbjrhf272A7gxc6XQEAEiXCo5RZd8A2b5WKHwezmPwn3BLChRX2UQLXbSZdmuXRj73n",
  "key27": "4QB1kNBEGQjzd5UGz6Xc5GuWZc2BJNPaMfmZeQUpBgJnsgqCbi8yvLETuggjhEbep2rnkQuRSmypokNck39YEhNN",
  "key28": "ECqRfuXepvmXkTLzXHVPn913MvAKrnHfyNBE16gC9EqpsvEVdXSzsHF2PPaGHAuZxfaZkkpTAFKxYhAseQyZeHb",
  "key29": "81N2dbxVMyh1UD3T8EtB6NfgVAQfTLm5b1hBkk7PctQmDeN85eq9Qsc6Ey6gsZd7sKNhhDWyUGPQkCiW6BwSFvM",
  "key30": "2M6irsG9CKKZ7N4GWuovheVLTiBCSrzqfKTBDsHFybHzBpANEmzbxo6jaCYbv179PYK9GVPSn9Nyj9boMs6jdToK",
  "key31": "27YLovJavvJzWJNPQiQtNmdYjNuepaYiLndhnSftE3uzQcLHADaM2qdUEQU3rDE58GSpv8GDYih31BTjAcbiiXMA",
  "key32": "3YL51EzeHnpdBqtZFgywASz8bVuBzcpstWHk2dAqyo3k2qy1picsBxSdJNTQCz6hKVmFQtNwgaLiDTrAEQMBRYCk"
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
