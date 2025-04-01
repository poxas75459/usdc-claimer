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
    "4x6gjeBJY8stwBF6yDDMvWdhgvyjKd2f9C1UWk3DLQmY3zBShpSiLmKoWaiSBccexbUzUHc3rRF5bJURCr2AKoRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Lg1rGJURzQM8B5VaDV2jqJgjmL7MnChgJSp3pw4wMKEXT5VmoKLxFy9Yp37j8jHbn4JHzwCfvGr7aD3geczWKp",
  "key1": "S5X2A9LiDT3UkVKxhorLMmhsQW5kRGxhcnZzBH2pCFQj6B7H39bC7RMRrGjUH9H8HfVj2Qxio8ZMzEav3NgX9J9",
  "key2": "467dL7aFPzJzFwtiXWLaW7jPpMxWGPAeyASE6Fgp9FsHMteVNP8ypGaDRHaVdewkBoZmLiXxUbwdmXHQVCE6gR7",
  "key3": "5yhu91t8HerA8aMLA7RGXiMxpdVMpg93LiDV1tWPG4XUk7yzxjGeTjvC9qrBqCRnSezU9qoWm5P5BwAg9jnAWJnM",
  "key4": "3hpxFp5dbJjJvCQRkmJ3cUiprjM9gUKiXdEbcfuMFJfQDtHxfUYYEihsxHn7GdnDf8kiPt5Q7p4hQL4S6aExfnBi",
  "key5": "3eaFB9NHYXC3PhiaiH2hcfCA6nTe6RpLB3RPrtpuFBov4cPR8UC2TXFfzYhdH8392EVrAFs1QxivcQeTC11DZaQG",
  "key6": "3JjL8wS1s3WwYZcoxwKd6brkyd8kMDyEXjhGrPTsznfBYjh3T91mreB22gP8YB4zt1Sri1j4WuWdnmmeFPETxLVy",
  "key7": "3rpNXUVvHnxMkjbZUejfiSmoSRxRrLkBsru4riw17DzDz42UfutTctFeUdHzvnUgScXVHDwtn65EBw6QqhCmkany",
  "key8": "27LepTCuwFFhshTXWJMNsz9pafkWRrMYimwa8HnUikx1D9tPxSChKDQpv8wXb6r2iEGTszx4EJnehS8Wns1UgmsA",
  "key9": "2JH2AWyEMVm1HCKjdWZzAzheFkXKTZgnWJLXj5FC9AkWKFKj6mEBpYhE29CKUWuubtBLBcSqh7P5EABC131GFeHi",
  "key10": "3Ak6SvheNXTZ23Zp769u3cn7GZQHPB3c4i71J7vo5HZDLHFUMTvLZDsKvCqAEEkwuviTy63PmyY1rCknKvDtapGm",
  "key11": "5N3i3XFBPWCrMgR4Re4ZaQsVw6xvZEtDnzS2j55MRfFJgpUMP6bUeF2YVqu8K9jsgAQ1JXJkaHrSYo5We6WjvvH4",
  "key12": "4J3LZr8mbxs6ERJv8bo6CpH5RaFLdudVWFTgavz32NCRqdJhMSMPR7nzAS1kEHzDJSLStctVtxUhWw9ozWBLxMmx",
  "key13": "3kr53qXzwFaxvi89wSraAFQKtMPBs7SU79XKSbzvRpFRLawa9D4zMtuR5JRAPVicjW6v6gcwMRroR9JSwNXiaCk3",
  "key14": "3nFcWmMCpQ8GQKQcLTX5nykEaTo2J9zQTsDyT8thKhMPaXjn5bf2cfrm7eFUDkhArxYTJoeU8YCNunG1aS8yM7JZ",
  "key15": "oiLGrKhtt1z9xydAiyXRCCqDPEP4FSC4VD8BfvQf5NJtufRGHrngSrjU5nE3yUGrTUt2ufGWbvutdzYSTrNAHCP",
  "key16": "2e4xmXTtaL3g19ocUeEhsZas6BGhmZ4xGigELaixp9Z52KZEcLXc6nRwaq61xyFsrLgeNkdAjJ5K7ihJ9bJk2J7M",
  "key17": "fDHDJbJ5uG5A627geaqf8i8NxBC3GxTdsMA12zixih2djnM9qasuscckquZNAKskSRFJSHX1bARF4mv6TjQWRKY",
  "key18": "2scTzhg1kV5jEc1BNkMNmorXZhcwJh1J6CLoRL9MV97e7SVtcDMNp84o57x5xMMqYQKPt68UjrnBz7zhQ1AykgPu",
  "key19": "2aVJuRx6juMHFb6AWny7HLtXZsKPUg422s3MhXvTZ6LbsxNQuGn2MPRaRMqpcxPg5JRkCbt7isVDDB7bzx7WfzJq",
  "key20": "2Murp5s3pypVcBuxKmp2hEGGkNGG2HsMgiFsGRuSdA9RMXJLT5s571LqEqvRrpBijCKer1tKdq4zr8Hq8BowMcW5",
  "key21": "4A3aHi6TGz9uahX8z8pqrLKt2nQJtNucunhfZNLr5BDuataJScHe9e5WmazGAfpHDTgKFovZn19eQigo1JPnLBsg",
  "key22": "2G5VpDRu2FYuqQzMCcia9LNKpugfgtSSF234e7259P2kzPE65wLc9J8UDCARyeWqmW1aTEy5DE2JjQ3Rb7NMgz8z",
  "key23": "3ojGsyxS5VXq4Pe8y9fBvARFbhcAcYWbsdBdQvsR17i7cNaQZtyU83gG4yuQoQc3U6soy853AQEh1TUXKW6hFJbv",
  "key24": "s69TbP69E6Bm1B64Z6MyEu9Tw8FihvZuskLprMb7kRxijArsXzEKvM1kSfUhBHPZM8Gvn9gSiRquP6WKjHepEej",
  "key25": "2qswaVDZatyj6NBDeXzJGKCqUsQTcxoz3L3FchDzCVPQaNrRYofpr19CbsnD4e2HiGrpqsCBFJeBLVA9P6mBF98K",
  "key26": "24JE7qgbiwx8DFomqxwa1NzjaCKdMBxojoZk7uGRLanBigjZx2QTcGm3WvUVkXjYs9sLmUuykCvuYGhJUDtJ1Dqe",
  "key27": "5P4hFGRqSJfdE2s98ffaah8Mb1s3WvGAo7UwQTqWtBfy3SBV9j1C5wNXxza2Ek7FbvzWubwKHaVvDskHSNXjJfyS",
  "key28": "5EWQwnpuD4A8wEav7deHCgEBCQooiXGaT83TaPTRo9GEduft1NEjkw2YNdUn7yWG2JXxNW8KWmW9znh6A7YN5YKV",
  "key29": "kLgFjn98jyGxb2u9ARyLhfrwHKkWzTXTj79K98eUhDf1Y8Tp5W88siqCJWGEsAiyNov2nX57fCPxiHNLf1Nr4iq",
  "key30": "586ZEFuqcjVG7ozDe1b1ehRLYHDrP5AC5uJaPzUmnoCBh3wD5NiiLWF1F9tspWMkndZ89HNwqJy9SPHpDGZMkg66",
  "key31": "qp6XCPtXXk42irg918FziEzEdjSiCNJxEkzLeeCF1WrnF9dTFPcYZd4T94KZPiwvHmv8MGJDq6neVKRWUvJBZnU",
  "key32": "mzpT7srYYSDp6TKpCYHdM7yixCtabmiz92j7RwgSSU8Dbar4vCyUY7zCEq2V4wxYFJs9X2JcNAsxmWq7jw2euhR"
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
