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
    "4yShqCASs5QEtp2EBQZyEQYzGX6Gq4A81DsSRkGeNJo1RZdeWdro8jqPB8FtSH8DnaLzWNrtUBJQcV1gtVcD7pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki3bExssmcg6ot35hiRngsqdif6vhL2ynJRY4dtWfKism4N6EcADRwp4TtqkWHiqnpu6pV5KFwB9t1scsJECFRC",
  "key1": "4mG5BTmyet4tz4ou1R7cwftCafTA41FTXN5vmVcZzaMBYxM1cseaNK5H8TG6Yi4uFcpiiMfYTfZYviNXakSwaR2A",
  "key2": "63LwGg9gKUjNCkkgqsj8xSNkYZSfYeArrThM8VtCKoHqTe7v4uJ8BZty8uvYLXa4xGXHtoCizBrdKks9xgTpyDt1",
  "key3": "tXDBdhM7u8GVa9garwpLkxQnskzuJ4sZdUhjy6ab15joz4V3dq7YeZXSMgAezkFDRrn48wootaY29ZCqdxJWhyj",
  "key4": "4q5j9r6BXDCFcwnnVE4dcJM8qdDdpbkZ5auuWUTWc2S2ZdMPj43kpy35pheeWJ3GqusyZhgUjfhUmMVfUUy4spNS",
  "key5": "2PAmryM5KKeHawpQvBtxG8p8BoMQZXczyfJMfswHZ2tgM9a31AEfU2C9YQ5PWhS35g8KrjJoiEv5wHCPV9PoXpmM",
  "key6": "47M3uUYE4wWxcNm2c6T8HeoKwXhvq7LWTbyQyYFavNwbPjEtDhyKbf2D6aHzueXaC9W9eZqmeoR3iyfXEihK7b1p",
  "key7": "64vifvPGYoQLF1wRADJgoWwbeXmqWBh3dHqhQT6w2Y3tp8XNYpFAkVvDQWpJYBZxy3NEYpsqKVQw5V3SsmcKtMGX",
  "key8": "UsLXmJkDDfQVz6YuQw5PdxUKo43mzL17kFHhRHos4sj8pTQ4Wf1teqEhxhseR4Ztfcs1Z9hDi47nEUgBKA8HbYh",
  "key9": "R82NVbQXUQ5LwfMa33S6bAZ9D8ZWTZAff8dDtRuLSiNmrbYKQTBk4dX9vJowK5k8VMkeYHZYRLZdMqQnkR53Wfm",
  "key10": "Zm83pJsHYEkEae7zHcgGihbyqh8f8bYwXmtNWMsemu5RSYTpE89RLkU2XCfi6kMfpDRcTsXZyQNsaYk6WzdD1dB",
  "key11": "3jpVeuZmCHnUoaHkXfwHwTUH7EMcXLuRN86X5xK2ycCv6joRTQaQbUBiiGchapLzkADJvhzMiCPEY88SMWCPf4UM",
  "key12": "xCdkheoNazgrQTjYNRijAstreKAEXjxUXEihLFxAF9q2ZmUzESUVkJDVReYiLgZRnTskWVCFmK9gpyeCHffwui2",
  "key13": "3tXbASejruQL4tpoay5bSBQdPPs21vpW1qX9wh1FWkL4ai6PP2ntJvZe3TgmukzWTsm1nQE5ixVRJ1YNpZFBqLzH",
  "key14": "3XdZz4abA7dYTM9rR3MGtW8n6da1xYtSj3rsh2yi8yuDc2KLaqQxdQcz5SRRaiRpAxdkgigmVqLEb4vgMzLixHQk",
  "key15": "5pCYMicCnXrEdNsN9WAZrSueBG4AAZshqpRjqxBCCXFUdG42kbZqKdt9JhP7VAHPwS66LfqAhTh8fSbGC1LTJZv2",
  "key16": "2pqdPD1J2JtdbcyzX6pmQmSe4suXWucbardSG8zTV8VstwFmnS8zbBFgVWpScpfRPQZXZR4yH4AdU4PBb6Ggpv46",
  "key17": "3Tc9CzYZ4oZ2Pdya8X6EBYoWhy39hcNBVLF7pgU7eYmzNoW6Ve8pdgeoWV2sYgaGDMknrE7VXmh3rZwmi3o5Lzxm",
  "key18": "651ogTc8UEn17WN5CM2iccAzW7vbCFftrq1pLhMuKvn8Jg39fWnnaYB2iAXccb28sYjdrogxux6NVGCab1ZLXjJs",
  "key19": "39CcfxUnTgKptWHHEbJxcg32HrnWLjifv4xaFZjXNHBcpyK6n1W7D5Z7U5E4bYMz9ByLMz5V2ogaCeum2p9jTut6",
  "key20": "2HRy6zZmK5SqSEvmY515C1v1rK3aDufxXwnGMrxCDChyAwPNbVXNMXK6P28QCVuCE4Es7KW4NRUtB3phYiRz7Dx8",
  "key21": "2aXe7dBjWnBN96B7Fnxu54PELAx5YPcuqLAJjR2y7aRNB1qp7TFizvuFyunrCyi4ZPoHQD7T2qbRREWHtQcdsL2M",
  "key22": "4jomMoTYw4KicfBGdCTUAtqqxXj9e73JHex2iYMEkDqM6cs4aYRFCV9YLAsnX6L9JELKWXhgwvAemiHsMdjf1T6y",
  "key23": "3ti7gnCCTG6yaNhxGvp2cJDacZsZ6meCR9wfUay6n1iBY4sEEWMnFUb3KE8Ym7vioB7FoADVW4ySDT42gN4x5KgW",
  "key24": "5tDcQJ5QXpunaP4KoqynLCRJs5Gyj8EDumVGmTBMqMA5DtPDw5vvqwcdADJRU4GiH51qjagN2LNRY4uiNWyZnp48",
  "key25": "5MsowPEHAkT41WeYAFRzmVawXQLhNkGfLDkxJjh2y3sUbTWswpcYuezmHPQJKp8f1jV2LQqZGtaD9u3kftt24Lvw",
  "key26": "3YMiVvjwBS2haogCrLBfTr94VsuLP6pp5pAt1khqHHtfWdQcTzGHNWhgU9nrtzgXc43PVyzu8F8PTtw2z32LosXD",
  "key27": "2eTVYUV6XXUzazxkEHL7LpgmGqjGbBtaaLePPadzHD3uwB8XwnHedDBiehPJ1dcgB51DRcCkMvXeMYAFDzWrF3vh",
  "key28": "4Xrt2e9NwYVndLeRauRjtMGVzKssDAz7WEWhL5AottXTRMoeAk7FmCmvEynAiJnKV4Z8KvUsNV9wp7MFTGbpyP5g",
  "key29": "3p4uHBv27RNRECCyd3ZCoCsEAgBAGvAN9ALfyrP7enKGvuTzNamFADD8gFUydFZGvpcs3BBHEzL66BgWNGZtyVJs",
  "key30": "3XDKqGd3Qm4mnjLcY4CcfsRontb7McwFSWGc5KUYwfaiJZ2iFMUjKzMAEQhEPkYYiH6NzLx6uLrLEz1VCVMKNeMC",
  "key31": "2v49g6pvGE5gHhQKrH9ybWH3kzXj6kWqVgVeHSnANP1ZoMj74PDtk2inbWc364qYKHetCNzCiniZkx9pT2kXtpAQ",
  "key32": "5vDy2acKw5UJEtMCen2a1mTxgTiB5SvJG8fDSUgKzXaBZWRBEmQYUpgqoBXMuAhTro3bXJBUgq1573CdjUiJVjfw",
  "key33": "TG9aDbAuoivdh2ctakgTeGCdWAfTYZusjTieceDBrib54RiWxXDEm5UKeMTwc6DzE7SmAsAtFSZ4XpipqCtESXk",
  "key34": "3UGGoHSuKFhFJ11992zcC3wpCxYJ6LVCpAJjJW4VVH5HpQxpBw5smkgWcEuHqiiwMUTNsHv1u58XAaRQu9pcrS8V",
  "key35": "4bn4FZrehNC1iqDtu7ovg29Q4B8X9owtgjYaQja6Vayp4SGkUNisU8BADTdTbhM3UnLqtBwBQpGeN9tp5xSD5kjS",
  "key36": "3ZW9S7dDRAGBAjz6GTZdC4eESANecCPsThXpB9tiyfmSp1VQspDDqVuAeVP6Si6c6poRcixtS6p6SBkLJJ14bT9Y",
  "key37": "6sZj7S3Ah1jBX8aEuvwGjt2gXPzgHQVev35NbaigNDRVu7zJEYf52EZcSS8bYTaB1RPD9gErhnpWXDHxXcv3pbn",
  "key38": "DyrFj5NGWPJ45wXjwBaTKrZWEhJLERieuvfRHwkj8CHdhhAhYjBKTDXmfCi626UuNUxuod2sFjKCyhrdBA3L6NQ",
  "key39": "4xprTA2JxXyRSTk2d8HtMsyFMQr9BZcxMQ619Au4rV4K2mRnzhStTK5T8kPMePiUC89JyWHrjWfEF7vWPJ9dtrVZ",
  "key40": "2sfdd75E8kPD5qJUGJLDAtrdQdbSVd12W2EmE6YLMehoggVrFPit9Cek67siuRQpwk2JHwzyGRsPoDYH6yN9Fx2A",
  "key41": "5q5ohzrQu9KAMpva5eC654JsCZhJJMLVgN8fGzXWaqU5nqqsCpokDcUqsZCGpGvHaDUdvak7xxBkXXvx3poPfXx8",
  "key42": "2ebtyaXcSQ5YwmzKXjS6QooPJtWWa1cnoG5FP2cEnVhbPJYpvk6eYUbjGZnWacV9i1fKbvMrk8VjXRydt3whYio3",
  "key43": "5VDPVJ3ZnZLajufcTqUYAv2ZZx8HGyLGBZrTKG2wSpKbxZFU6unZKHzE31QuiJkFCuoLDwt1wE13HNpvNL8aJu3h",
  "key44": "2cmqrjbUTdM4XtUZprdF5TaSZexq6WWET9GXKf3x6Wt78vr3VLAinvySSTjBawQVfaxNLJH1sgiHiFDpS9sEYgZQ",
  "key45": "qzrA5yyVpw32CfFDxTPnSQh9aWuBLw8GQAMq2BJf2YpbDvzxbPtfji9tQs3csitRZwpjdCEr68DfmVMsT63UeGU",
  "key46": "5ZwtpjhoZ9JfCA7krWiYnNiPLioWEsnLm3gZGtaXrNLwM929XPnRMk9KX9DSKLXdwbTMWQAzaPKsm36g1daeiPSX",
  "key47": "3JCRnJHKbtRk8DW6CnKQuLigdLjud73aHT1FFkoKHWzW5ue9StGVWFx98vxCwaisV6Nrh5xjZGk5kdRXEq7ymMFk",
  "key48": "57ZUvZp7kM6tfBm4BN1NJ1LEo5DvXiPSUxNKkNWVvFZfQfCmofJAfuMYEv3cWuy8921KKpyUf8mVroAqSMWqTuta"
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
