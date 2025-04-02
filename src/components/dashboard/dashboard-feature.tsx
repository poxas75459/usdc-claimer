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
    "3LC19gKzxxf1tbZZbJAEqJeyyeFtYUAbfUYQKQWDhSZ9VzkLUF4ejhxq7qPgzzCnBD1Hsfs3Vakz5vgA53Yt6uHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnjbKbv8d6a4ZbFumD4dX4ekBWRVBRgXkMrRjzC24jLYupo7pF41zFEsdvPAzFB2t1ef2Xpggs9orbqtRpvJjjk",
  "key1": "2h49aEVQY2UdovWmQPt8a963jDHpcDGiAzUveTBXG1mEQCDiJ4gubkTCbjz7187SHALdsWqJBqHZ8jQFsBVJXngg",
  "key2": "2xiA2XwuSyyFwXGCUUijyTS8vg3bh1PLqqUXA4G4Un6nfsJ62jykTNSkXGYn2s1fvaHq9hh9FCvP5oAjFmB3VApx",
  "key3": "4DPTbQdsd15W5pAeZjHhxH8TLxPEVKZmsL8FzTkqoyFFPopLce8aFaAgKYtJSdpMK8DogoXe6gsW1QjhBG2ZqYJ1",
  "key4": "2wMms8p9h5NWjAtaSfDHXTbVhAi9JPKSttnJE6v9B9G3p7ZwkmR8gHh3YLoMPBkzu9qTy9NiN6yUe7QbZJmkG2dt",
  "key5": "5W2M8LXMgRh2kDfwR5SHGZxzGw9njqLqvXdLQ2p5LfUiL4e5VSnWyg61qDvnTtP6Z1aM6jzSEK4mCHS7bUuujGrk",
  "key6": "2RhEmauMKNpFPv68Bn1zno4iH1eSrshYm9XvGXVHMbpr32JPc1qhN4mrWrmiBq7breWvQQwCv79sVatNxaoKpd8f",
  "key7": "3T3SpT5zjw5P8tzEfYfgcjtsRjj1xTrYX695SQunLmUXQe94en6mxPfPRGTiEiEYE118qcqVDhsZ1QmXcn2EN2yW",
  "key8": "TPvKzCJ1siNWfapsnDxm9UPH4h5yn1V11cGkqoanWb5Y6V2MSEVwGLnC3UJoqszy7dTyMji9npfuSNNsrkd1u4M",
  "key9": "64otGJ2hg93Vv7HooNV3SMmRLQxu6bU6ZQ62fGMqQzoqJhBGS3Ko8UqntdH5VuBtqssadcBuH9vRQN8xwDjNB5eM",
  "key10": "2mdi7Dda3jTzmdsPSRueL9yu7avFCLvVToKYwJEyhJXNHVpVKY2unuCTjxbwqVRUo6Ec7tULHA9SAFC1mK59mgkn",
  "key11": "24NgJMDgV2fMfaNqLLL7hGhrbYUY3EubS1ijLfeXo9pd4XgRZnprEzpRzwJDuu1jtuKbbkjhsrjAotGrHYm1tcfA",
  "key12": "4B2WjFxFPTgHxKp1dLtovNo25PtQg1xNomQc1jQKqEvohiJvEE5f2hLbgfSvgBrgEwLjsTNSYprv12YbcFpj4siC",
  "key13": "3auWJUrFXpUmsAb54Biz482nojacUsNyd3t96jHmWVZUY1RHZBhHPoWPi1GkkHfZGCBm719fLGYc4D6v4iqVAFo",
  "key14": "342epGU4ZJ2z7RdtEm3rQQkBvMzv95UKLUYTEhh6LfaS4VmejVVPFtyFKDubsukWMCcDQFqyqsaND62n5DEfvrPs",
  "key15": "4JZ3y5b99YfsaDiSogDsB3cpKY7H7ogLguiEkVvu1SxkhiD2ZSuasXR2JFKSDXFos68E8bN4vAvka21JVEoccKzo",
  "key16": "9W86xpY2aB4WujezBYtctscsC3YLdxuTXf4vgU2UN9dq3mGierbgVAgjsnmu5GWKGZ1ShSCntAG2Qgk6UEZCzir",
  "key17": "52C4vaowE5c3guvb5zJWPBuuHf6TxU2j27NpEmTpRKUdH7AUT8i8sNCYWCVGVZNcHuGoy5ZVZj5WPGijwVj8BoWg",
  "key18": "3zG2k5YAa6Q8xMCjxHzmyemxUzufM5PNji3WcpAxaBCFyMyA18fkvFcmfVuVLxx3FHPUgPGi9hsyhojH5bswfKLF",
  "key19": "5wmdbeV4tz8PCU8cCDx6goWnbAwCuwFN3nhwzZkMbrhYLcn2Tf4Yc2rnkSbLcsqMxpCPVp3kyNbDQesEFfKamhwV",
  "key20": "2UWmqR6riRBDqD6X2x9H6WPEvEBygcjM3vo7gdvsfMU7LFswtpdrS6bfWhiJURXBeN4UWVAPDXiksfES8q4stdX4",
  "key21": "5aDk8Qsbr8xWbZXiFXHtEfuihvhNY86g2CEw4K2uegMjyeXc1ZUirWm6ai3mqVHYNYqD7qGz3z4NVyq8LP52tXou",
  "key22": "iSLbgx6vVG3PN3iJn1SwXvzCnYyHPgJ4cMJVsD1vQYJCqFopUbgQJAiFQh6k2tgYmESj4hiRzzGsdTPrtogJKe6",
  "key23": "2FcFu61eGkAA8oXN8KM2gWS9qUxXdbZ53x622JJFn4xT6hSWEpgaX7atkKMzrov1vq7ntK9uAUUBHH7xzBSEPY9V",
  "key24": "5STok8tu31XxRmwv6igWiXLVeno5xgqq8pu5wWVCVxQwWV9NwVPRm9Mcsmo8USpqq7Bwrtbjd7rMLCuKwu7dpU3J",
  "key25": "2U7AsNWnUG6JVME2XyC67iGCR7bjUQt2KHQG9TTEGyuUqBr11u7qsn3foGdGLtwdqd8FLcpALXMQVwrBAPTAUT3B",
  "key26": "5NB11xPK7oEZ1U9T4Y81Bbj3yxBQtfMUC1L3v1aXUDCPedDASVvGM2sF6rttC6cPHDhE2LWqC7DQZ4RP859vK1ou",
  "key27": "2qMBQRScvshGJZsjtwswKeScQNaS1TdBV8cUdEY4P5QTTk7xtZfda4dNg7zwPeKXCvU5cZSfdwcNvWfZWZkw2CN5",
  "key28": "gMVybsBg4nfpHSukJhZ6qUBLigVAxzZSSrhfBRtyHUsrYsRVSxStPp9x6DQGzJ8QdJZd8gG8GRnQoSs7zZLHfhn",
  "key29": "3Rx7BvsrJQj3vXorUZzQNfeoUo2MBw2vpFg3No8zEX8AuhKH3zvJQHa4oNHDAy4TgXg4ZiHwNE4ffRr8yqWkPmZt",
  "key30": "aptn5Tgtzk2NshhCxiRubZGCPHcUkHLrUtYAN3hmoxMmW9MUwzvMaDxrgV29bAvAThCaELpNK2DtmnyTxvwiQVJ",
  "key31": "3SS3cpwbz9xxftLbGs2NUWEVigUjBhXo6cXeXnoe2n9qDjrJE3McfovjcrUbm4kKrWJov6yjEwwgTwCRVhvQk6Hk",
  "key32": "5v6oSf7h7NyBJ5igfENSVcdB13cuqTwLZbd3Jfymy5CDrJC2WsytraJvCdcD5Y4iEoawg4cdHANJ2YESZ1qqfaBb",
  "key33": "3W64YtZpvAWn8M9fMKKKbyhMzyWULUysF2nYFJ4xqti85Mkm6ns7PPLLsD2ax4Je3s7rRrphCejqR9Czi1Bk6Wgw",
  "key34": "NfdikZFobnim3fZVTygGg2FdKebZ6k8HmkuWBYJRKdCmRCMWEPQkCUm9FyrVwJ4eDJoYAxHkNEibCEpZJGv9pEf",
  "key35": "4usQXjcYe4QSt3P38hw7ofdkWoPzjxb5wSBMosjUfQh6DLD3LV18bEYZegyCx2arYd2wtLng1Bimf6WsH3pcgkNZ",
  "key36": "4WA68NX8qbrQSWS9UxW2HDiDLnVADKEsQ5DjyeFEPAgSFERAZqhhrGGjRSxiFyvdnAgmhVm7guUFPfKajbCybP5U",
  "key37": "KKkCN1hzBJeR4GR4PdQ1jKxAYRMt5skk3P1bP9CeUz4RmFV1PbxXWYBaZueRmtb1RN7KDNkgAfupLJMAkPW2n9h",
  "key38": "udTQgZtxtuSA5emoyCrXA7Uetn41Bt3iwNdD5C6d1XEomZcykkVYFykx4tsVkuhnrBsTs4XNH1zvvQWK8uCY36B",
  "key39": "3haUitT3X5UNMR4nyppfXx34SgKX2vuihZsggCLbom2RsKDSwgxHMEE5JkZCmtYWSvmv42s5k3aod8BL3WD6YVWr",
  "key40": "2qhE9ZYBu8P6dGF2rM2G1mokGZRv2piqK12Es6ahGrTRvY4sWGpDq2BsiDJbgyrLvPMUBHeWcSx28USuChfUZ9Gi",
  "key41": "5yvFurCEKaHz3yu4ukbSz3Hf5mywDB9miLvHsWqnHxx2WrcAAVMrVvpK7g7gGv1vmsjqAVAkHcWyHKfPVv3dYjQL",
  "key42": "3hPpZySK6jCuH4tvbGHa1DuR4oJijd9tuor9PtVSXwNDKVhczR7XWDGmJjSJYwTPM1511gNHEBfMSxVe49CPZhom",
  "key43": "2WQrSfQPmkKCa5CbNAM7PEB9ycmPj9hhNc4hFMsvHAjjEHWvuKUa4t2xB7bAVF2FqtbzfLseneCXLAPFTqHcWyEW",
  "key44": "5BsaC5L2SoMx96tdQDC5pG6JrHiSqdHXVNpzLSHA6dgTETCdVvkEwXKSmFz866KKE1QiEUEN28FkZ9WWmWDKrbi4"
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
