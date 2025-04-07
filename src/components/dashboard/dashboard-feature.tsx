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
    "cdMWYbC4syLuQiaJx77kb2uAoF6Z6E4W9mdGHsqTv6k3XYLKvdhQC9pBB1npBh9i29m2QHQb4t6P3We4yD1jWRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DcmvkMKtxxiSL5Aj5TRKLeSZrDn6VP4rqeXzcx3T92ZGL4kjYvfd2hRARwSVtcUZ76XEGebwdkSsbNbQ9Mq38tc",
  "key1": "35iFQFrTbjD4y23oKomN3WNk14W3zRTJQd5htWHbVDHNoUM5CVEJqDCiY2gF94NTbZDvdpjkLE98kZRi5d3XVxtQ",
  "key2": "4GiJq35iBk8dCtmho4mxsqam38dmbRSgHX2MsM3xLPAe8k76t6by4i8LD7wspyfiDXFaEcLyS8kghUAUxQcLi4WJ",
  "key3": "jDiiSCFS2WQzhaMsgXAxKpSi2cVmZgtGWpwGzA6CdKNKTJoEWcEUWccpM3tGJBLv9DgL6E8du3GEMphX34R3faL",
  "key4": "5uGMdZuQNzBWrFmSj8FK2HchkEpRBS2CY5ZpWY9ynCXA6q9GRJCrhExx4uv8EJNLRwaTh3MXQn2XJTZ3h6Z2soh8",
  "key5": "3rfQkqvuzXj5bpyFAMRUXmxzbQT8Ugt8RoouG7rtkggu1X9UXMZcKeyYZicQC48kii3FxMqxmcTC3c97Jqh6nxV7",
  "key6": "4ERnhxX6q4ZqztVNEKDyXhx9Kg1tJLTgkxZxLGNCYLmDQFHg5usMw5B696DeEp8zdQL4pDHjXCkdHM5n35d1tyno",
  "key7": "45EG6nnNXGJVNRJe1sG4Ryhb5UU8Nh6pA2ioAGaTud3ZN3WhpoKvdQurziHNuwTR5GmbJmDniPhqYCJW5y4EiAoZ",
  "key8": "51ikWMzu7KrZ7XCAagT9diZkVqnDRe2i4DUjdQsAwsW3LQqDyoMEKDQhdb19fFhWAxiR4heB6UaV5s3xk2QBxcf6",
  "key9": "sER4q455MNygEvXrwEci3eznDiWft8x9covY6uYNw6SegYL7MvdpajfVZBzGR8fMWghydGHBiXFB43m4giPSZ5V",
  "key10": "4BeK85Jt6bq2wBYuHvTfofW1YLehjXSzxKrm12TbUfXK3DU3AjPe9BTcX4LsReMpvyMuEzJfGPbbueFiWgtbXRfy",
  "key11": "2vocz4ddqcT2JSaSzg8vdLVX2PvcUeZQn67sorZEDFzUP9jefLrbg4JbFAWrX84LBvaWbtME9G4RUHoRWbs1SapJ",
  "key12": "5HoJmBueU1FhuaRpjdxJvXkHsA2Hypetbm8WXrod9WSF5Ei9iveHHQYPWLGBEjrCHhkmNFXSTF5vjXTXiK835DGb",
  "key13": "491VuU4fviAZzFFqEbtw1twRHM1DSvA3jaMtDcyuR7bfW91zDKmurjTHjtF6tyA5jYAbwjm7rB7rowDTtac9xWZo",
  "key14": "4APhWCMo29qiYcPPcvZ8HvS2YpbzZAmW38jcdwuZenbK22UVt1Mtx1LkPTDELiaUBWNgMp2wbrvGAZLLCpD8amBk",
  "key15": "3NCGAptBVpEkRiMEPMgkJuRySced8GdnNb5Kz2kKeWwyghc9e2nJGxcFT3udrS3Yw6wvi8m1nwQqYCdswLUFCjKr",
  "key16": "8APgL2CBXxZuuCdd6WbMiETq8xdv7RAJTeaa2EnVj6GMdowsharL8ovt355dtqfiSF68N3RinxPaHsMwnyYqiDf",
  "key17": "4ZH7f9D1d9bw4viC9vUaLto7JVtbcBCSrTh9ca1EBNnzAY7RrVB13ac6QP36Fwc9So2gUVPeoUQpCieT8H1oSK3R",
  "key18": "5vhZw9bCuzzxCjVsTHAvegkN7HyMGeSYhSt5hKk2KmD3yLNyymqD8uzyBT1sQb4G53H7CfBdHKRuv6gybQbbNRdm",
  "key19": "dByctBahCv5qV9k6GBTGVY5kFso1oMJ9asvmApgfKzanU9on8xHwajTnBm8jFt8Lyj3m9xcCJBKfaM2f1u5aX9b",
  "key20": "5ghxZrrxbvX7ZZgx87mBV7iYDxh16aHWXYVGPC41jfhcewVhfyKwLPCfGbxTicDbFdUMFuMUafPja5tGTgop5JVn",
  "key21": "5G5tXWskZcGagYp1e8rjREo78ReiaxtCLfeHWsbD9RgJ1HGYUXFyK9ZxzZWZNVbRTaxRCiMVnZJR1R2Q8bHRFuPQ",
  "key22": "5HCTFYSoV3xh26jnmAUMi2M26aBABY14tMdBvpksiWktQTCQGCkSr4KB7xdq7VCn7kywnPT9NcwzUK4oj6Nvva3r",
  "key23": "5rw8dxViLgTCPuo7EYPcxc3JDXetdrvX2hAUgfX1abv3FssKxiuh9jW1XP5ncQpc7VJBRZ1DHaSct4Wfbsx5Vt6t",
  "key24": "2WeVNGCEDtmTMGznyNuDSbhahb123UcopdZhcvfELz5SmCNWT7hByU3e9GWtRRChZEYPBW9QGvURiUmKLuTkJAY2",
  "key25": "4kKWHxwBV9rKAC79vxGbjA8ZGuZktFiaMiJJep4xBb7ZauC5QuZH2nETjySAi1RNz7bVAgJseo5g6JRGGZVmN5S6",
  "key26": "4T4hncqEZjhbD87B1GgsBfbPQQeXu9rRFoDZuDoDmhdDqnWB5DZTZBnDErBFKrUzBVtTVGacfeJKEJwViw5GUJW4",
  "key27": "67jxXr1CphL5odUaDVN8pkRC6pYvESTm82qpGmFbuLvGaQZ5VnPA5QwcNSpD4dcf3Bk1qBWTX2491qaR9Q8cr87S",
  "key28": "Vwcq5YPq6uXMmaAKcgGmqqZqZjCRgHJN5Sm3a1eAhPaumDxhCd1fTTqcDUYSRrLWg3FYCUpbGwnNv2YkEuXaQ7X",
  "key29": "5PS7PooSJ1gnphazWRZsi9AH9yZP2FmHPVyFP27t5p8etUFhcMmtE1JoNxARF6mLFC21A3K9eARwMWeRXMcQhbQ7",
  "key30": "41rQNMxeTTQq2etih89rjS9WHh9j21DvUZaqAFTKRiZL2bRgJ9BRpvoWb9hKVbNoWbFuCAxQeiQeDcvgae7wSxwY",
  "key31": "3AmFGJ4TTSygoveno1egCRRvTboXaNAPcHtcdWuaQc4pzquWZMkxCRvWUDND1sYJk23MpW61L4hhEBsZHi295LHQ",
  "key32": "5Fa1mqE5y4VyvoRenn4tG4Cg1ktNYUjB4Br3qK4Fort6k6DwKcFsNSBDCovVcg8PAYBouCzWgDufcPZKF23iYQha",
  "key33": "y8MENtCRwg1MvMTzo2UMHUsCC1D5L1NK5eLvrhgpCJoVywoCDaTTrCDX5c299zfGF4WyXfMgd947mwjuKWS7Nh4",
  "key34": "2WHP4R3Wu6QCugxFrk5UFTph5FM4VxHEg3wxdNMENWEfPwbqmaSpdB9DCXAm35HWJCb8Sig73kaTpcCy8VULdtsb",
  "key35": "5ahGQzVGAjco7kMdF4rEjyDoeJgW9rBBmpyZohxYRfVjJTf7osGeYRhkwc9T2zYwD8touEaooWZ3Cr5zaVp1A97T",
  "key36": "5ZQpkwkQjKzqaqSPF6ADs4y3Mpn2FtPrHC2QCTkQCwDp6eWabjwvhJPK4ZSKKPxXX7b2A5AUNV72mWNMKtnoniwV",
  "key37": "2hCMEcpUd1GQAwSEBJwowzma4ioeMiA82MpgBYwSHBTHxAz414aWuEUytJUf2zKmRwvPdG3eLaKG5gJiwL2jHBo3",
  "key38": "39apBXRfgF5WGpJdjqRnBzrYh8jXgB445oxXE2DWsYx1az3xwG7RxFUaVxZdAyV4GxoFYJrgfUi3rqxAS74tvTyn",
  "key39": "u6ojkp5DbDFbPNKkhee5quXXSDqKhnUhJ1URkRapQEdqh4YYGY1q9yT8VygMsCxd8bCqw54NuUg5J65GMGeHUth",
  "key40": "5T1ao3ADPRn9AJPshyohk4impZh3Z61kzHqxoy5fj1j6NoiEMoyC2KUj7CAuNYuuYJiX3RCQRzq7Xf4wz8KSNrWr",
  "key41": "e19aJcncwEmLCRuMF2otfvnXqWEE2vVYUj5RuQLByqMGWWoHSmFBCnCjiDqZycHKoX3tErhukrC1ZsvowjQiHcp"
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
