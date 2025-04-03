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
    "44UYGjWLjJcqMhmdbsDED28GWSmYP8KciQ24at2QtRogcepA1SBs1J88oSW8Cm1FAUytiS3RvdFv5Qtd3bLN9tr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCa6AMYfRSB7URUZW3HKcETQKnPdANZqmRXRAo4GZ2J2JW99tRE56hVvm6rkU39cX7zXcFAWFwZADXKqtNENCjx",
  "key1": "5NFT5PoQywWG9xu8gxVi3TrUQsJbHw2NozgrNcvEQL8cVudBCo2ewfkjHy5YUEujem5tNsbVK5FUMBRWkohLLzd8",
  "key2": "3u5yo4Qps4EQoJJEjyqjPHhcFaxf4wZS3YSBdDw94UoojApuJ8X423Gdw7gjZ5zcJGK58uZxA6ShcLFMDpdy6n9o",
  "key3": "sPE16q1UrANajewpULPCBSgy82yaVN4BuNTrS8boPdvskorRXwPqWEdmGxEA7NSE3GiwMLQy3sy33pqiN7EGEHy",
  "key4": "3BChFT5gPThLueEhwRiHNWhiC3NLh2WVdtbbraKTR9kQXqBGmMgrmwZQ9DU4eiw7W4yC4hTZ38CzsJeQUGXdgxmA",
  "key5": "DpYTDqMr2jMyxneiEJ1Tc8Ukqi9TFENBGDt2pMjFgzVwVxyLEmoDMcZBPdiDADiuEh1T5dEtFF3E9j9pzrM6dAv",
  "key6": "52tkq7tmXZAhpiVCCymVfoDJ1rMUnWgUZdYkJmuKutgY2Ei6qe1gh2Jr3xsGQyMXoqpyrnH1s3rHb9rxi5ncKp5Y",
  "key7": "2CuvEmrNQC6WumCxqY5FEFDXzouEpPkncoSswoMdbHf5aDDiTig1EQoEWFmB35arpbTBhidfpkjqWREEjEQ9T78i",
  "key8": "4E58oPkQK3vuHscRiDW6GvBekWBe6mbnwkB8JiiUch8ybaKxyWKtrm51QqMivWtF7tYJaeyBULzzbiowNPtFCLJY",
  "key9": "zQaw7YZ8vP7SiiBT4YspZgcur3S7xPtJpUs2MjiQu9mrgvRwfYPGZcVB4haGpcRFZXswkdnzXio6tJcYwnzixzJ",
  "key10": "2fhQeuNbL8vVuFEZYTkMfKesVE5yrnGzan7N4N6o7NsBRzBJY8LirAFJyqLiuR3cKPnNpUe2wQdXptPMePpiYeVo",
  "key11": "2M19WaSvddVJHAxtt2MwL2i2joB36VUmPXWs59xrf9RW7xY3hfiJ3Wwi9RGeKQ6y5BVFpRZgz3oMybzT97VG78na",
  "key12": "4EmW4CyKybnbHWwYzCxLVd6pEoC3iyWMkLuBoCLhhXHS6rjrPaTsXjtN2NJnZSze8QhkoQDHLqxaoxPFoCh5L721",
  "key13": "33XgHXN6fN7M9jjj3kXsn239cN4jJwbQiJ8ag7C3rv8XW81iA5Yijj6U6r7AYS2hNTAinrAT4HULQsJ4R1NGgroP",
  "key14": "3wz1rJJzb6CoGm4RL6fbqFC9QpGJLnjFndUcx4BFCDEVgXgriwW4PLMMv1pBZ1mGsSVfJ61LDcVwRDdjqzy3w6RG",
  "key15": "3n7NqHDaJ7XHFSAtp82acEa2xPi7jRRq8UUTFoT9dRDQ3C3UfXKoMyM6eTQpv1uJjs7jM5t9MGGiYpHRcDC816qb",
  "key16": "tVZngfB9w8vwePibZTGbvD2UGQuxJADNwEZpBjPqQPHTNWtgEN33PZJrkcJxpuSmzeprt7ADDHM1P8qG75nAFQv",
  "key17": "4w6Z2rqXFuFFYHn5h7nuJuTCWEoePeDswUnmgdmggoihKuqxisf6cmKtGj4dnbhQxCxei8KqbRhBVzN7WCioWDg3",
  "key18": "3AXdWzDuGGFTsPzk4WV4s51AkEVc2gpTQC38emEoLYpC2s5kEA41gonsQVYGs568Ga5JhvQCJt7NAhnVtBoQKu9H",
  "key19": "5wVoABTFxBZRuXzxcHModNzWjSUXLb2z7Ryo1T7YfwdZe4N61oQvgdbcTZdY6BmByBp26ykYTn3cnqu1BoBGSPP",
  "key20": "3tasPFH3WgecBTKLnUF8J3qjELgc9NjuKdcP39TxsbUwQ9gW6oMNkKYeUVbadNXhsUbciMPRY5x6Y6aaL7ZdrvZA",
  "key21": "4c2YBxAcM6huftQLb1aeW2GNXZCAaW7zTaaUrLRGhVE3FDGBTKcArgTmnPtnydCQVsEDCBXTASmKsLUDFgMx1dKY",
  "key22": "Ev4AyvwCy8cRQGH7p3Bg7uzhMDQh61NW8akrrtzGv1YHDcBWDKSMiStdopPjhgpCpeYfpTvzLjYzZ1y4UesBWwQ",
  "key23": "kgmkoKwALxzttJKfFPpFsZj7St17qzKHMoYFrUP2W64bhbaSZCnYvEQNG5JUHuMukVDGXLYvaDqqF1bMZNRpAZq",
  "key24": "KUZtS1v8TXevrucAuY14Z9FazxRk9XZ7X77gjrn2wqKLrhQdaukaqyxQEc2Ze3ppSa2GuT9zbuEZ5Lief1WywDN",
  "key25": "ahpiHhzEEhNhHxezx3o9mwzwt4aiPaYVmEHu48c1jKwcy48X2LrZ1txZfj9hi7JjhvFyb7qeh4JCuDhiBoy2UZm",
  "key26": "2RWCAKju2fQUMNES1VRN597NFY41nX2y4DkawkwAn4pzFjnV3UdofficXECsEtoVdzzwY6VNd37KorMTZtGueMGB",
  "key27": "5QehDjoQahPjUq5KACMVU3GbX7mgDQjwFbdwcKZpxpWi94jY9uWazYS1frGz431nNQQpP13hf8yBm9Qr1cuU79Kp",
  "key28": "TjFfVZM8Y4qSBrDBxNUsSHpeQVdzbwQqfLQvtBo3hmfAnSZQYQEcsABtEqPR9Js8k3XykSx2pZS4bKqV1UgzG4k",
  "key29": "5MqXorcKRfrTM4TaXv3US4gdcGqZVLJhLza1xPyCxg41AUFAHdif8o2fRLuo7gjtGJq1gN7yQR8URTXSjE64WEAf",
  "key30": "5YzsCfhJeFXQ2PX2oG9cxr4j3UXvvSgtAWgzsuW3WhxYwjh2zdqaKPusBRJcyyeS96mG2M44duJ3z9wP8ijijPNp",
  "key31": "4do51v84sTTe4bfp6hMywHPd2VNr6q6JX4Ew68d7XBLu5o1yC1CLvihxosgBwP51zXvbwt4kBo9K2xycmHEBJDZy",
  "key32": "5SmXGGac6c7A7t4HLx11piNAs2u1NoCqwWK5XviYB4hVW6gWKcreLXJkyPLgbgNydbG4TiJ8dsLWE6ev85wKzefY",
  "key33": "2rYpm2LizMHfGF5wJpB4s818ARyPAPUkDaEgokcjidHgRn893fHnSujLN611AchJ5ohWLYmRhXRqs1xQVgGwYPex",
  "key34": "86ju26SZ1pUod9sgVekKhiL6a7bTBfv84pvVcBYN9M15nBWRZMGBdxx4oqGB5n1b8MT685h65SYEAKwsfWL4VAa",
  "key35": "4JKNQrPeVquUBN3n8SAEL9iVUS6ZoRvHsvrH6XAiepkKjsvSuwQ5QByPSkhQyJmTLgYxSetECPa25ZFeGLN6Lme9"
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
