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
    "61sKWbUxxWXeqmgzUuKTYpSUkYwZLZck5dSePHwVoRTeGvYmcJHgMxq1JaN1HGcmAzzeLJTJVeqbNm7Y2di9XX1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVugzQWhpR153FQjGMWMKkgXs4Jm9cPsYjZepRs16TkGnniy6X65oNyEAP6UGx8FdVNaVBy8KWAZfniGh5Xft7n",
  "key1": "2UHnrjatJVXt3YXu4WMxmG6p2ge3BSDSw3SX8nZEC6voVVcT6P3B1RsXQxceeFxFehC5cojKSJrPmPSxHEuWvEoM",
  "key2": "4G5pFykJm1YCFsYEFeKRwWxkqbZJCEWP5Rz8KsZSMDHsGENrLnxADjTbL4urMWaStKuyBkGQh5XvpncyrwpeR5n3",
  "key3": "BGRJg2dMYeBxwhQeiMfcGpEWhqvhXshHvbtCP6TBtUjn25s1mHZ2MZzqJUEiXf2GvmLLsxoGYbcDk3pwkp2u9Pv",
  "key4": "2F3up8kj8snaoFP7Sx9RFPKL7QYmitqTZ5vBRhnNjzm56JbBNktguqpVF1Su7VUhxXZLXhHAKMSk5N6drxAZaL8S",
  "key5": "DZtoAWkZ4CwsiD1rvLKvyxPEbVrDprLUMbHzKfmfm1ja6RHWqn3njkaGtjVpAGdURbkvjo6PmrEZMsMbJtHe3WL",
  "key6": "3HTVeM5kEcixtCf6V1mgXBmuTP596iWLm3BVsQLCgPGXQnKYD9b46srQwiywuGbx6SUBLnVVmPHMregT9vQRMtpq",
  "key7": "u6iipso5Pf3PkzhityJUGLWkDJ72RnRGK9QUagdaB8HQ5abrmszZ6SinNV2BM87u4SqdcGwSsvz5JuwaJKWmwfj",
  "key8": "4n6TdTLc9n67cF4YA7ZExeSNEUvFfA4AXkLiZiCCdAGeQy5euhSGEFBorLBbp6rMGfJcjY1WA8FL66KqaXqpMdYw",
  "key9": "48xwT4fePmgrSxXGEg4dC6NrNENGaW7anKgg4om46m8iftBfwWVhaPa1NtcnKAuzwD3s8UWabQ3GbjdWLQiM1e4U",
  "key10": "231JbRQ1H54Y2cuaRMpx2GSMXK4HQhb8PW8t8wZZj4GGkadnYg6RLvzPzqN3cuPuLCsNNtsKyQ6Xvrn1mHwpgex6",
  "key11": "48kgzFYWgwGfuttxGhxAvHSVAvS9AwABwaKAjXeMpLg2un1nX3jN5EfSzpRDz7c3dYP6zgZsecG1Jdda2h6zK61B",
  "key12": "5xDPLWyBtDd6fWMPNm1ax7mDmgK6KYro1XxKFRkL5cVQbGDWcg3RbVL6YtDMRckXJbC775jSQn2dzwCpBQqkEKF4",
  "key13": "3pVF1JTwVVsBYPdaFriGH5maexxYQu1bmCydUnp8fvtJZqK6oMg5FEBhcq8WeXuqMrWDVia1fG7bNKHocQrmkCZw",
  "key14": "5thQKsCm4ULvpy5vtzFJEPwXt4AG72xjTJQfNsUqBFNewPtsjCqweZSAjHJzQt7QC7vYWASey7qxyq2fp3M3QcHZ",
  "key15": "LRtwHZbnh57CpkKg7v4ibVcs15cuBnJC4uWWzLECxTYWX2ZxW73UuvJL9ijhEYCMXuSKhvVa3ZJdTC2yWNBLXXf",
  "key16": "M2MQ8YohHdpRhRdHPeBdy2TWHSWAySXFUPzMX7tzXXP26Rei6ZsZfC3ze19bYPtePNp6FeDemSXsZfZSpi6Stsw",
  "key17": "3a7P3YQ6R4y8J1ubDgRBuyBfw1FGbCFLeYecYmMvrcACAsnC6xxHEaimjCPFqQgM8HhNDpGtQoBYVJdsKsDACPaA",
  "key18": "5TtczSazh7rgAeL61fxiMozHx42o39rzY8Syrw6sh8iiLP8RenphAtGHdUW1x416FuVja56jKkR8Dt8ckzcHSjJx",
  "key19": "5fkQojefgaPCb5b6v5hTomSj9ouMqfQ9xFUPqaXXinn7MpXA7745Z9EcJrC8Yj9g2naFxirH8PaxB4THWW4C56Ru",
  "key20": "cdtmjz2WZBXbeQYnnJUVG2QJQGBXMWTiGtVmsPWRRsh7WzdnzHXR7jQo1dW1MjSJtTdfoWWZuKawZGPas3v3GeT",
  "key21": "4fuafvLAMfdggdsr4AZ5N6cpA3Aup1QsFzvzzKYGkvXjNFSick3PTYS1bSbzEBSa2HpdBGsR2GFPKg8mpWGXFj5s",
  "key22": "Fq8MCwFQeEVu3oFmuMbuBgo8ruMMnCh1RvzErq6cTmJZ9eSPaZNP2duputw4yV3kkCH8MPGGmdRiTN8iU2VPPxA",
  "key23": "4o6k2tyvrkE7A2g6S53nr4YTJ55gKykwiHvixZqGWQYisN4jZHhsrWbTGAo35SEtwyE75teGbrjKe5PNUYLMGZEH",
  "key24": "57JyT43xrp6u9cLgSyqjajG8RmW78ekRG9AYzG53p4dCfA6tW7prqA55hpKSDz1F5JS9Utietqs1UfbqU5PKStuU",
  "key25": "4n88Vuq37wpDTNcmQkvfua4JcYQKhU5dwdunKXtAWXj1gDueq6pEiUv2AykEXgx6jSFT5u94dqjC6F8GoNLGiGvS",
  "key26": "MDhF8SxK1996VD56nVwUufzMM9HUVxa4BTqiWf1q8fyk7omyXr7w9a9iHRzKoUe6rAFCpx96QSfxLyAp32C3irH",
  "key27": "4HDGYRowPCEfQHYGynpkdSrqZdmGRS3DqNVtFuy58puKmcAbgTWLUn7csHZJnz479aaxNUYipEdEqPbSwwsQArad"
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
