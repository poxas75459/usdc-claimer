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
    "4xY1SZ56rKbibKs7q8UsGFBA5gMVo7f9yF8KP2TomQVaAT6G3pzHoU6mS6sr5kW5v6ueE8f6KoibGp3p7TJGpoCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AosSU9yGprAta8jjTxsMHCCKPnvTa4c2GW4cVnGunvAmcc4rxkDGAPsoBpY5kTxAny7sqeiu31Aw5eK2rjnArE",
  "key1": "4bakhZtgbTdgwVB11jvBgMg5gWn7hfbWC7KZLZPpHQEYFrBLjhms5QrjR99ksFtUyatBw9Pw4MPbC8S3uAS13SEm",
  "key2": "2B1j7oR985CYtC9SzT5XCJaV7iP6vGgtGW7UzRvDQDFVwuLbEHjpN4SHiuWMRc4yWV3wm6z22sTXuvaweTTNVey1",
  "key3": "4xwZToZY5Bix3XiV8hxkETsjP7j9cjmbJXmC3iSb454N11w5Nyh9KhGA6LJ23DZ3sfTKKx6a9UnhszZsk85gkU6G",
  "key4": "sgXKiMnEoHurz3FRuhCPrWHat6aGq9pReiU7SeF6yTB1sfEvTE1M8ZnoXbHUTLjcmfv2w1DLU6xi1fwrw1iLayM",
  "key5": "8ZdTHiexonaoXKbJfXmjHvKYwnFKy1Mxw5wAC9ALLVkRMZzLVMLGF5bTcTWHVWdGzKuDk9sQ3vjNg4C5kX8VGGo",
  "key6": "5ghoJYanL7Qna6v9Z7U5dMWZzKwiDePxUzyBnrix4Ps1jcwEocfcoknJuQQzuZKzDzp2z1KghQMCxudtJGiAmiws",
  "key7": "49VmsC4P42cSq8kdEd7coPAtABg6vCeTVB1NgKizLX8HGbDvMAhLgmihmRXC7L8Kq4ppYhoLhf2Tf9vPYWKgV5Cb",
  "key8": "XCqofSaCz1hRshREYjz2PQhd7GkJuAuu1ab3foiKy5uBtfrCs3UJNaBrCqpe9Jc7nHjTVGjTXTUSPNKjddYNoDi",
  "key9": "2q5HogazSvCZMHrkYJKA27njjkiQ5N8vkjwWg2PovNenCnm4sNnVwZMCpEaHgfUU7pD9c6aceJxY1qbRaG7L9SUy",
  "key10": "5YsrkARasqJUQRtM7QeKmtey6QDdxKH8Dcy3xb9mYFy2WwVN3bjNzkRNKivvE5iGTWbMtezsbnptpqRj8NHuwS4W",
  "key11": "4Aijb1g4Bho3izgxwBBTzQCbhPmKujUW6mpfh3UAz65Q9wGujkKqpju4JRsFZgwSFinMd5VqSe366h88AhLRvrwo",
  "key12": "3GNkqSgv8V19JUzAnGnBhrqWn9jsNRsTwW6kcCfVK5FSVhqbKgubwcr9ydapG3jwDADXkSNHv8hVoTmdGrvaBfLF",
  "key13": "4YHBhXkTS2fMnaZ1YbZ2oPDcRF4vAYGTX332uguZMQds8oEN2CpsmGf6MC8hkJwJBRtTMX6Pnmrg7D39urbbtUe9",
  "key14": "31gQW8TCqRBZ7WGuhLon1C8WcH13sDgGZotdvZ9apanUHzt9Fo27Mn8Zjpuy8MvNF2QWf5uCQhuqb7LaFPLW9SsK",
  "key15": "4caBPboZcndYk3TtXWA9ehjgYog9eSAYFimAogKVU2RyX5rFtypHQ2n9pXv5yVi38XkdqGD5482V45p9Qa2hgiJk",
  "key16": "34SqFpjEnFDjx7Dv2BvtmnFRLgyDgcH7PxJJKzrbyF6ursj1Vi21BuK8qQ8PiH7RuhwA4hYZ84CyfFvQwkwineg1",
  "key17": "5dsgXjqRmYsvHeTesi5BULvY8wV97Q26qPDMgFfTng13AgEMVBjoe67dTgt6WXJvnFkRExkDJNhdFCCDHnj2uioc",
  "key18": "4zzKRDxoojMU1sbPBaaW74SyzWcoGvybejBW7qGL7xNNMFndyVF3YEb8chzAuEAjXRHjNMfPweWwPwfp2WLcwevv",
  "key19": "2wDCQG7Mzp3W7xSXt9UKx5digZx2tJZM3j6zJcBVK1tBQTqH1JHP4wAKqVNUdwZDiJNzCWHx8e3dhCyEksYw24u5",
  "key20": "4AaR4K7XbCkseJfWb6snXSxjbr6YpenbBKQnTUav1myjFptiWbFc7eK79fqQ6dw4fdEEW3mXuE52iAurQjnd7qC7",
  "key21": "ECHHGPQjhEYvPJhTHRRLx5QLoqhQ33LmTWpTBWDYZbWUTdKLo97qm9P6WsGsPRJrpHUgPtE3BuzsDrMAffMaqkv",
  "key22": "3NQgtBVQySccrkJfLpswDvKguCeNp3agvC8RpxhxFAaxwmsAjGZCEZMmHFCVs2Jq9L2w5Dw4Di8hqe4gPNNTGJs2",
  "key23": "5RNA4cNUZjzoBP52FS8keWHhrkL8gYzZ5i84eEFs36XDjAFNMqrYVjcJ4f2v6F5cAznv84tLUCDsKK6XLcy5e2xA",
  "key24": "2Pe1XrWDzvfFmsKtASVxuP1FtunE85Q1AyaZwhV1i2XiQhnQCz64Yp7arQiwVPnY9BiB4dEnGPsKNbWUfC9Bup6z",
  "key25": "5GEjTvXHjCwo9Ciym3gzdb3BT42sJyQn4eE5JBSTB6ZXTV1VatWhjcQjMBcLsLFTzVB3ACXG6vdLbqx8UiETzWxn",
  "key26": "4HTEx7t93wDfrpKLmfJ1e6R4TsL3xuaTqsBMaskyBqZBLHUjKSaM8PQgj4Mm3SpgGfZmNqG1ZPFvJ1kfgCiNVvmg",
  "key27": "Y2TwEtwZz7pg3W55PAbV8tLe6Ef7xDezH8mabFz8ghPqc3J7aeh9U7a62sWqdcswT1dZeN7xBMuBFGrajUCLb1z",
  "key28": "2UWpFJ7g3sPbupR1UpcRU6cKxBDaKVFHQVQoi8WTzo9uhucw8t6fnYC1cHUQyCUzqwToziZBggiNVnLdfE5m2yFu"
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
