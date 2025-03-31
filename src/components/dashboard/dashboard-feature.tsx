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
    "5AseHtqpXiVyM1EnkdBH8M4a2dXeLJ78t8FPVtnxuvxKGHRYY9MFxrTBsMNs2wCHFXf3JAXexerYPHSKHJrdgfCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePZAuMv7RyYsCoo8UNd98tRitw8V9YvYo9q9ag5jwzPf8WnsZkmkKKh3eCwkJscBX2qfkyvUrnrchGYu5Zc77oE",
  "key1": "9szEXUWMLMuqckL7jn18wkdmXJChrCscZYxYDP7Z81DHnhkb693B2oKAPkxN4bGfC9PoUSVGR5DEbTidVadkijB",
  "key2": "5Mvaja5kCEXVF1FT1eKH7yFekGz8vxDKKJ17XuiA1xdTBhH48ekHxo51fARyD3Xs5hbmW9YuP3o1fKeeFjjL9euR",
  "key3": "5Kswykydq5Tjc74DuZZEDJUQnYtnQW2BUx88YQT7yRm2g15eyiMKi7xUfSKj84voPMZeyAvwXA4orsAkLEzU3ENE",
  "key4": "3MdTy4zUHPRYukF1XWP6w4zG8xfbNXP1Ld3UbtizKeWnttdF44taCUm5r5syhjpXKbXGwvNXnvPAE7RPMaLiDTK7",
  "key5": "1nUnwTGtT81Rw3EJ6RNUUwYwRxP2ipJsMF6HZum5W5VWmduXzVjbbzB3avufjSC68SrDaC43fqMcWCWeA4DE69b",
  "key6": "21dZX458KykG24f9EdQANNa8Lkhbt9dajzBpTt2B3upn3Z4C84uWB4sTc3jigA6jhBvhegR1MYoKbxt2XjgjyN2r",
  "key7": "Q7z4zWK1SvDux1NJAfboTt96EJnnEqXvEKVkh2MTEPTXmr176cEuZSyn8GywiFGDMciXZp1a6UiZsWQmvGRf9ze",
  "key8": "23tb6zfuJ4yNH7APqPFg8y5J3jgHZpBsc4Gs9LX4WgDah63UpRBFnoYaFQTE9MZxiyXrDh1o23YSMo7AjSYYCZvP",
  "key9": "2P8KiojAYA8tGyccGfPf1gq6MpCDKB7vi9fEKGo8gWuXCjypgCp7ym7XLqxM6Qi662tE8GJBK8g6tDv4hxxjYvzV",
  "key10": "u8ixSeWkqDcy9uSyV2fkX35jMHRB2qGD1oCJBoXKjQFQgSK3eTEB9sdW5NmLHySGFSggEBXMp8Mu83b3k6dkKBt",
  "key11": "2Pm5pJCCtdYNFxXEc9z7u8CmYpz3EDzVXyACqBoBao6dxmCbxLKHUuQeSjPYboX2YW7FwA6cRXrADyhWgfPbMBGQ",
  "key12": "2748sbceXWcuAKUKkCDP2P25N24Bay2R4YYk9bL4yFzYS3gQAkHk134hEM2EG6fwKXf1McVREoPT2jUhZKrEKyww",
  "key13": "5U84aS26HBZv6aFwoWr1EAHAmE2TQEtvy5MWdeosgQ96CB8RvoV6o5w7rbasjpJSKDPV9tpy5tsRAgV3ZgTmWHbS",
  "key14": "2MFoU68deozRDtEo4MBYErCm4him1hDMFLHKegXkaGBE3K4wZfK5MvhRUAQt9329G3xekEM14WVufG5QjDJHEzVv",
  "key15": "5veMkPAXRzkj7HcB92Fd85xDpKP2KkZdsc4GRFyA2vxpMiT2a5UXfonmPzpLMkFyRfoSxkU7zXf72BbxPkW1HJDb",
  "key16": "4bJAqNVWTKsaKWedaQoLndbhM5jXPHaWu3qdaCJmMvLXxWf7jMUxtJCCz842HF5uZnceeJaNsY1Dvd79ZFJfGXYy",
  "key17": "2kBz62ff9hdoq2yMPwPba1NdVMGEVhQnW5H5yZMuDq94RvbPhHjatZ4fPbMjofd5vGEwSBjFSDMPjXAURkJMHyCy",
  "key18": "3bkq53Ue1zFJRCZpTyvsfAxYY96XBm94VeauDKqHCHjdYRhm1cWzFRyxsvQvqQ9rwstfZF4kxvMU89SfaFooGy3",
  "key19": "3oXqw1fxtAPiMRGRC5y3wDbPUEyMnbpZjyqb9jafzoEuinvpKfUbqvnuF2XB8FvX98UNyEvAXDGQDD7PJ2AAPJPF",
  "key20": "2tMRej9oUT8HSRMVasBqXaAdtyyg6EPVLujxzVK3AVeE94hYh7TNPFw2811A8wdew7t8e2B58Z1esNHRT4RKzBaR",
  "key21": "FQU3DDSStDCD1vnuc1GYw9osQoQmwY9B4dAKnxkyJuTkHQk1mbviLkkh8LakJaVvYWe4ozb2F2zVe3cYtTtwXZd",
  "key22": "5M95h7aiqBDRJMPmcsNbHSYNbprhjBF8jCuy4qjZKH6WT81xBwo7YTHoLQGA1vedwN3VJhjR2vYaHXbQ6bWA8JJV",
  "key23": "2oW29w8mT1oMP9mbB3CwGtm5KZcTntFn8UpiEeVfmYkRAH3rnYE6gvoJNPpGaX1VUDxoaVAwf7pJVnfVwJ1Yqjmt",
  "key24": "4asLHQAjyMB74nnEVjwWz8oneh7rgr1Uo1F9F322zASSoZ2foEacAPzYN71n8KkU5GStxTemLfzKMBVEhaJiCPgf",
  "key25": "4CDoTGph4MRr36vgUv6j91rD2NZf3ZKzvNoeV7zXMc7RwcY9CKKQRw65ADBvRMeiWFHWw27EdgMAYGx7QLJY4peM",
  "key26": "yimA5xPaAhcGQfEmiYAJBR4BZ6F4BgRy19sjgSU8STWygF1fYrrUmgZn5gi7NgYotD5WRrZmui1Lzmr6U65TsQK",
  "key27": "5WV84dTf81wTuNQQuBBTgUunVMWwzjFZX75ndAawREUQpGJ1ybnpwjV96gBQcSWthG5cxf3J7HzPQTfUGHwfJ14T",
  "key28": "5mVsFT2jWDd5Xfv78VoTjjusXuhKJinPrXug3QrLVaAEnobtniqScyLbHkY9DADD8YBjJNgnethsNCbEuod7mmcz",
  "key29": "5opUEF6Bf23iMoKB5Yz98mS9Wusne2zRueeFjxvivxQyGo3FUojtXJmQUbNQcV7M2qkFiLZfkAZcCNmTajKLgris",
  "key30": "2nLxj6tnGofycTQsZqBTAvaXv1jFnJxdTnECCNbvtjWM89NAn1cAqDBJ6qitUSjo8jxB23Ps8MHSdEzLo8U7wjne",
  "key31": "5ZnqRjJvECLowGcK5T7BNStSvtWN4ZLECJ2yRzzwu1rEzxurvamBci6ynRJX5GVagdW8NB6gNkAiNPgyWZMAQzeJ",
  "key32": "5c4ykdxEkWG9D1Kxu6WeGKqWK2tGCeKvBJSMYcT2yDuyHQN7pPjY5sZ2Qd9LaRRwfyNaFurfeKweqeY1FKpPbTRP",
  "key33": "2QeQBRnAXC1b6PyddkSuxCBcWAhMoGvr9xyotfCdHGav2af4rbFzDUn2PhzAsLNsrkSH8UPso8bTzsgVsoFP4u1b",
  "key34": "2bGgGWNdgcquNen7UvYBzScSytRiuJun3R8T5KxNrgDmZu9QG1rTjXKfp5EaWSHENVFbFDCc4kXqAuaAn1DAW4uq",
  "key35": "yq7KmKcYnMEt6bmeysQMemtFKZM5Ey8AmYbh9s8kuoX5jcEjJBaLQS14gTcfdxqdyp9MKSSYutbr84YfZWytZsk"
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
