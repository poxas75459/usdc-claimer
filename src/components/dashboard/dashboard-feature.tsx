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
    "4vH7Z6VnfvWXWxvc5jpTxp3T4jk6pFxnB2MWg63VpKXtLgCZQax5wXN4vVuFHKYLgSFhsLMDUgAHMoUTZQfKX94E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvFAMWshmFMGp2EayLS5ynNKhRHANd1qhCbSM45aqw9HDdxDTaB9BppDmrJ6j1sFNAN9X4C59EPk8sj2Hmb6cL2",
  "key1": "AFv1E58uQ1K6frZuTxAXv3nb36FBM3nGQBkXykN9AHEEqLkqH2hCKGMp2uLNg38Vf8wmuAm6DQzfcsfubDtK5zF",
  "key2": "2im5JFQ9fwTVnJMuW4NXvgTCrJU5cXB4MSW2xWiqdnSxyRdXcW6tYWKaHih2wLWr5N2rP7ASigURHQ6NYcmFCpzR",
  "key3": "D3VcZ6et3UVAg2zpTgfhEkjQ6vYauERww6AMYZnyPxJarLsykoWYP7g4Qe6NNV19XgLTydjeMLo6tVkvGsdfGNo",
  "key4": "23BAFwEWYKFTvWyWpjZWktegi7iYBy2eEZV7JrUDvDoPGYcjJQFGxfM4yQQUMXGdoBY6HbbE3PCPK4uFHBwgm3fU",
  "key5": "2jQv8Vck9LfS3NNLZ2ECLL9iu6mrhMk5KEonssszzA1bvq8wEh473DZM5FnsdAvbSh8TPZYAkAujvcLd2BzQBNiN",
  "key6": "32uKJH7zExvniR86SMVreCuEtf639srBs5fUgiEx7HYD8yrZ5UtY4koR5FKbk4saQhg3vEAAbNZXZgnKsRYR872Q",
  "key7": "4UfHC6KfzoRgCbL97JppP2kK2bH78Jpg72BM9FdMaXH7gWt9hs4JFX51j6dWQHVQfYCGzcmgbDLVy9AWRo1dZtbX",
  "key8": "3TmkaC61EQyytf9UDmVYJXNZXkcgJcvqygsQZ8g7VbT7GMrnXJe6gkR3bmgpyxdPupbpB4UgUU2S9fv5nEPJpgcU",
  "key9": "3R9pC8rCCBqRz19wvEHysNjbWrjbNgdw3mbfvg7L1sFUPnxD9qrv92mCnAZmEr5rkwhsWTySGfD5B3q1J3s8ze4w",
  "key10": "4AF9s62SqyFCYGKVEZg8vm6LEGn6hFntixEBdcsmVnttKVykRJNJE4V8MeFyFVSHbekQD7nUosC1mT8Ppk56N9mt",
  "key11": "3aRtqTJ3ePjuaV7tmyrBWcpGGuCweGJq9EZVDKHiFeLp4pXASRJLTZ6wcz4QGZMijbDERAGHqihtDiPgzUDREsJb",
  "key12": "4kfnW4D585ojNctqFbEfEBay2PZQC7LMnvg6zh1qnxb13kbTNpa99RsJVTVsxjw59pS3Wcn3QC7ZmpWiuFmG4YxW",
  "key13": "2mNuTJK6zuhZsradUiHffLxkgniMju5SzcEiVh47He5X6oEhMz6ncfgicUvyJNah7WbdCoP55B9XYQgLTJryW5K2",
  "key14": "3hG4DjvUrri2PnUMQ3pqnCtmLhnXTQmn1HbB5i6jy1QZAvJoGNqjEwQuBFuvEDCjGrLk26uMWXqWPM47gc8ruCtB",
  "key15": "2tRqDidJmeJEhKswVMKChabXb3bU8qcrVnWnLL2kjbC8fgo1WdB93Zttqcftcz8d8WvonPKAhdsg3piYwVFH8B5N",
  "key16": "2NymxSTSbXzuN5aY44ggBiaMoTrcExMULFBWZ97xe8GhfhxvGckXs3qqHELJomorguH7csf9QDzyxMgVVDGNdD2r",
  "key17": "5rYg75sTTDX1aearEX4ReRhB7YBE8LdYTY7cVov4ycwSZPAYH5JpTTU5h28Z97SFCGQGoUuimdy1t1oJ3hP2oFd8",
  "key18": "382Yz1rjhh7pYxazgmdbZk1Wxm7eKcM1CCwEmQDGi9nfJidp6s8SAagS6uD7okjCtgE3XeYjUp9fbc8nufqgLvTi",
  "key19": "2PTxMTrqFk5eDrChfci6eoZP65QoUjm2i1trH9d4Ncb4gEcRc6YYebo6uyaiHhiMZvnLw8VEXoC6u8jVpGm8C91a",
  "key20": "5k52WGeofrGqAgcY1Wk7EKuL4fGccCT9U8XyJGHGECaWkr18HYBrELHWuUMf2Yxt5VqJmxS2S287TBrUD3gCGbQM",
  "key21": "4kHJLS2mTRtS4Wf3AJH89G6eREVXbZNnLmmaS87nio7E7fmX6hZt2t4B7eGXersk3sVkvguMrqmmjrAPHTp6PJRE",
  "key22": "Xg9vhgcXrqKKnX5WNvdCskF18sEntZLR4tNtkPHteXQgbWEPXCYk1fWzwE8Ngrr9chnCK4WcVFdkAohiYUQGN4b",
  "key23": "53Wiu6xAxRXQrsqPDmwbAZUmnBoCQhhqsZNeAbeZJHamXXGhZYnAhaVHmNJpaftfpc4buqn935jBLuBA7EqrUTDA",
  "key24": "4UL6X9twLmCGcXkRFLkVzzc2gsAyFtE3VeNeFFJagTXDwPnvCWevBKDHt5EfQLru5W2JY9CS7e8TFjfkhTnvBX8Z",
  "key25": "4H3VDFxLzt1E8TPhhqNnNgd7c6Bo8vyWL6BaQr21nH6x16QdrMZhoobnzUkqk8EFrH5iEHNyhhtmDEhF1Rh8suuD",
  "key26": "4WgMNLr8uFS1AEwRBfGGthfDppA8jk6p4CeXavG9td8DXffkzYQLpa5vtHAdwJNhxvPd1vmxoaYSumZzzZME1rNA",
  "key27": "62PAk4FgsCmugUuweNn3L5bPJg51eus2DmzyXct1F39warQh7WARq5vbh7SSaEVuB6mDrfn271u4qoYu2Rz5SLH4",
  "key28": "36vMYZ6MPfntjeudwQKA46XrSCnbsizC4UM2QNJQrcwGvHYTVLNwVMCay3LmUDp8Nc9i922p4i4EsNwSTaeMs7o8",
  "key29": "3VUxokXcKRW7Rt9G3a3vTKEL5Mcp8cddAfX5ekQSrgAN17afyJEWLFha5bkCMgcnH2mdtgegV3pityJHmqadU45p",
  "key30": "ZPcUjA7Ac5LXY6d9vev5BiJD4LmCtZMWozGx6xgHtPYsvnPuSY5DRyzYiC5cMe6eS1QzrNCjm8AGp2ikDkXk24R",
  "key31": "yYxkNTzVume6fN58HTfcDWbmcoTC1P98nJq3TakYyrT4Y4GNF1znd5gw7ZYkbwTP2cjBoftVfA6Y9ippfkWa1Ho",
  "key32": "DtCn2sPMkWWoJwAcircKsGqM1zeQ4CTsF6bo4g2qDK9E1sSduGZ7kaB52BtP5KhTaDs57gSNdFQypnCXpHMNnDn",
  "key33": "5aUVLohM9auMe3CFPPeorn48Fq7qbWQsvnQoW73euV7EbX8KWcbLS3jDw27L2qtyv9hvH8Ax6GETwwth82zinckk",
  "key34": "2AFFQAoHMnecvMPcLwSd1CfNiXDJP7eFem99CknXCZFiio9nd8TKwvpeuBkwhLqnbdg5HenJmkMHkaqqrQ1jQAxW",
  "key35": "kx5WAy1GoW3hr7PUWqHUynRbsSLiNpEeefgNi5a6xxAvaCgxWK5e8xvB76rJ6SERGAgMDEtGP51PqaSYRR98efB",
  "key36": "X2vc15EbwiRmYnMg123KaV5ZK5xn1ytiv8FHGQs9FFwK5Lwsoh25jrj2E7EUUyaek9pPvWNeGr5Ar7qaoo3GReZ",
  "key37": "3LqihBCegKpkLyBTQfeb2rmLqW5eLnnjUPWE1CvfBg3Ws1oMBZp6RJyM19FDB4MJiJ2NbeVY33GDvMMV4mq8ArxS",
  "key38": "4Dik3pyXt8dCHyzLiuW5L2ggFY7DUs1HXRFLdNFXja8YBhZ3MSKV7ctoiwPgDohpJmbnP1aGTegDAARpwmGU51Am",
  "key39": "3W2SG3Y613BuPYQMwow57ujZA6ni1pPo628qyxmghRp4K23c4hQPHiVJjwLGEMQms2LT5CqoBUCDjPiJvbqzroBE",
  "key40": "3D4PbgJYwthEWCFhhQ3HHRcM9PCGPpZpnWJVFSrdoNfcTR7eaGePps1zfkctohymT69osadTAVDikm3UigHv3Z2S",
  "key41": "353nMfTSTFbk9TtvQG8QRBHM6ExRN1DrUTsvuE13Xayau6f7FA3Efmm7oG2dPwKHATzyUwQtFw2ctT6p2MqJKtMZ",
  "key42": "5kFhiFU6PibBBBPPgA4KqkXgRNyiXvP24XVMM6e2goSdn6PgiMTBZoquY4hqQrRzTaLn4gVRRsQE3FyihedpbjxR",
  "key43": "2WtqsBDXksA39ayC5fi8iWvPMQf9PgUUTs5TtzVGHmo9fUWr8QrG1KA1BCtu94hhHXpCf1gwYhUnpYQbxLPovoSJ",
  "key44": "H9UFrKtTxSgH2mA17DgGA9KxZuhzwMuyeXBEHaptEn2Cn2uiu11pYHZeuaR8hk3fWCvZFr4rawg4Mcm45Vipy48",
  "key45": "3yGHBa8o2J74avEM7wBED1JSrZCGFbMCXxeFVA1fUjbaG1AfHAxy3EZeeRJmq2qcDY8SSKBGNkAjpp9anEo6XZdV",
  "key46": "2WvA9Gs9pAsuQ68Af2bQdEHnajrmQKziLq8qqAvtViTzP9U8qSnA4yW9Eju81wiNjFwKrkncEp9tJr1qeV2vah7v"
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
