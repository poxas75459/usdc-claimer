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
    "3dxD6UtHeQYQavYPTHyMaVUGYVQgQLwKxB1w6yuEFtJz3B1ygVosBCbvrdq4xm5fDU19j87svAzWCG4jyHRsskKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9hyNUAwwVQSvKQHwyygRpX5T9kiF3vUdSDMuobEUfcEi6jz4f3dgMoBwSmu81RP3zX9qQMmbPEK5f4jaSK557p",
  "key1": "27FD6QicYm2DXTKRxLQJZ5SG7RqGcPB4GRU414d9uqvXhq7WyP4i6mJ1vJ3tVDhe9JQhG8ADMXBSrSkgfyZDvyUr",
  "key2": "2tSZbuZwVUaGrRBZEouM2KBEww4tnmPXrVjfDQudAA34XypbT5VpabsS8irBK9nd6wPFSWBzQ97asyKnTtyUoNtD",
  "key3": "A7qKSbv7WwDVYxhbKtsTrah3J2QBeGbfaFKYMVxCNMmc1fhYE7Y5ZoVsLKst6mtBszuwdsoM81vwkC2YC3tuwFv",
  "key4": "LUuBGZ7EVzqYjwKbXFtZJNwA9w7y1Du9nRW39j4vXpfdbbSpmk5Z9Qr4L492KaifHh82vtD1zEoJrg49WSumWXw",
  "key5": "4d76bw7oynaPTaUEFoyTUQ5JJJ3mMPx3PwYBruGxu5SyYWrvzNn66kU1rkgUvm87WYVyRtG9cUp2HAXsEUA29iEm",
  "key6": "5YCo54pq1HnTjoApH5Js1iVDyf3YFFGiQPtqFExJ9SER73Xy5ph56E1nHsBCjJwPVqxtRRN7foLubwFjhkUWKinu",
  "key7": "2LKG1Gydb1KwTLgLmPcEy8NM7Qo51pjYRC7pquHiHXj5jvRC9Xox5KiKm9ckdvSHLGBmCATm1BhpsVwQv6LdedFS",
  "key8": "4kopgFhf7Emnt6MT1dzv1cCdkt3atpfuSWE131boRgaxR2yr2ahJb4i8WyvHrhRBAWrz2YRsE6fu9pUb8EwDTyD2",
  "key9": "4zzJHV5BrwWhn87HHDFjpRKv4tBwxpzXb48EcuN2rj8goRkSJFUUsS2Ev6etrjFYyveDTZMs4cvyXJudAdEN2xxv",
  "key10": "3ooU8tLDg1rgT2m52CuDWrmNWxZQNkyg84EtDEyW2oXm9Ntpt1nfgXhrwCPmymusvuTNwzVT1a3nvH84sdFL1G93",
  "key11": "3ZyKRgzrHnhUxu9sTfvq7Xbw9MZE2vRCoQyTKcL2EiAsu8u6cKZP1PqmBdHmpoppQQ866u9Qib9LPTG18gMb66sq",
  "key12": "nnfdegKXgFwdTroiyHAT42Z8B1aJxo1tRGrKcFLDGiU6CDEHdxCr2wBqxuZ26kH9uPwacSTf5awU9VNEDt4CdVG",
  "key13": "6sfrAwRsxcNr48zwbWwCyaWceMXHZEPCHTmXTrcNdW6MTbizxpaFvzrY18rBjCHTMyAGnfjPDjRSg11fKFHheyw",
  "key14": "5AkfTxbdg66tU6J8NDW5TJ2MhePzMgG5EYPjaGASkuLjn8HAPbewJYkNMyDLzaL8hU6ZKb5Qp73JFfDvuz6rFYuP",
  "key15": "3KuDnryTQXxgJxDfDedeGaxuJwGanziRttzYqpKjHV6a4tGUhzvSM8YVkYc1CUM3kUL79uLe2vLGnSgGtqsPndCE",
  "key16": "3JHygB6qoeXKKQeDJ9w6u8VQ6XzdFWM7BZrS31sqoKRqBMkCTVfraYKdyWstA2uEQhP659A6w9XDfoyCGYwetSpo",
  "key17": "3Nb7rgYx78hERwnuA9zLiWGeZfuCmeMmARhtNnA4uDeX4CtpVRvQMsNJdnDdCnfhBduw6cbYaUSdjHWs6Nf32Yy5",
  "key18": "2pB8GdgR4YSqqSJ1kG64MYwjW9yt9oV5B3EMJY6yqAFfEBnzCfpes3pwm4yn5RRVAjURbtYYmDazYwAhxs91vKSg",
  "key19": "f92Kk1dWzNYFBgDJNkjnDujxVdRq3EZpuBT9SwToySPTcG73SY24Sm9hond7pDuUvb7oM7kTMh1f9sD6gpKbbeV",
  "key20": "4kV9TExUcnBV3dBFj1iJ6HSw36iFSV8HzYUiRC58UvmTWCMHScTCvUGSWTSVsovdjgoMZVNEsPCYzWmpXNvPddjK",
  "key21": "5szGfJP3asLrXU23CH3sv8tJDfi9c7npFcKvr7UF3jRjY3Rxx7MAZjsizsHE3ACWwSvqoBzSeG4UUtaiJPGW7RxG",
  "key22": "3XQ85xDnvs6MjcsXx7y43CfFX6usUj49d5HCDcXJXPoRsaMunSepbjCJsi7TVSozDoNPLriWMEaqnxsrLnz3Uoum",
  "key23": "5R1nvwCuq8FZWUjStLAta3nXwY4eSkCaZmnVoci4ECoKpjZ6gX8troUhWoywd6fzkx38bqk7vCHxDDwvnvwoPTUh",
  "key24": "548ocQ6DDT1N4j4bDVxHXwTKuiMRYSQhndGX3d5DCnjUgqeS6YYa9JAip4ARYNmS6S2H2L7psynGTEcw6E3SHDhp"
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
