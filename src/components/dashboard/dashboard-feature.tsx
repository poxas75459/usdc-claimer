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
    "3CzBcqjsFiEfBjfHMyVVSB5HQ5w3THnmPbKNGDXkCiECj3WQ1J4QKBdAy7i1nDxvRRXqAjuFkxvZ51ob6ntRTt1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RxTxX1sa8w1tAGLr5WvsVaCQfjvQycuUFKMxurdgruuXuZg86zQvc5bqCbKZitZhQbXFPtPcMP1im7U67o5gbNq",
  "key1": "5zKrdF8rSNreUDE21XA8iejaqpNfdfcyz8ZDVErBUGPr3x2RPx2e1XkT1ZQvPW5kBnYu6GfaRsKyx1QPF41tZRXY",
  "key2": "26nPudRc5nMpLYC61xqWFj6NpyLzSBBAGLvCtUMB7sz2k5o3eYchg1Nn8g3Pyf2qHivMYAoxuZw45iHLkrmABMaf",
  "key3": "qzZ9Q8HymuASmQLPhd67ckoVGYWbS8g7ngAqov57EmeGtasUoC2WmFeohuTkPCuNpUEsbecHhF8nuFeqRZbHsNd",
  "key4": "2Ar9wSPBfPpHbqNMD9FytNuobHcL5WFnbwHkCQroyfqgSn1rqkqteG9TxKhsu9cRAYugt3xfa6vgoWurbsFUGFWm",
  "key5": "2xg1Wq5ZKh6D1D11yPDAnUu4qSwUw3iiXQNGq6FMQvXKyR4x4Wjpjpk1GawFj7gEcjRfQhuc6FBaQoHK5WVsTcjb",
  "key6": "qe6WSHvsZfe5nQVDH6QMpffjnr9kyhwpeDzvmHaUumKpSsYasJqssUq2oJCSgsnhzhHmojNa5W7i1Vb7jGmNqnx",
  "key7": "5xz4ZcGVPbfhmxCBHjpsoNvBm5hGDyEMDyhkxGpq95LggCsvhd1AorJPRuZQV65JjfYYHAAWJTdABzkPVUdimcKU",
  "key8": "4V6eW8kxST2iKMGMNV9VjMizPFDHhapEtcc57j3kYSVxsnDHUszadXvkn8mRPNoMrFrVLdcvNrX3yGUrTwaPakAH",
  "key9": "3xs2V9nwKraz4rtwTYj2K9LyqNgPmruGnuE9ThakX5XPhLV2abuN4zV2581PnJAP7G7APPCSjW1PPP8vZPuGKec6",
  "key10": "Xjq5uHKvEas2xXkm7FSXT42BGJjHjvhcMNUqNjqt5LZBUm5cWzonMJ2RaZhjmX7RAbaJGuSK6RsbD52nuMQasFv",
  "key11": "2tiehn1ETVhK3xWqa3r3AABPEUoWeou4P8vhhif5zheuibeCxtg1v9HY1KzHDrvaV3SbhBUzZGWVGT8vHwTLxrqM",
  "key12": "7LJdoVUCndpwBzACM9ghGgccC2eQfGdTYvnFgmWJJ2XF2nXhH2zpzbVvCjRnw66ajytmnSfksRBNVTmUj8m8DXU",
  "key13": "chAn2QT2dUJ1MHJj33oYw5QhwdHYQgV84byJu3RV351MkHdf8d77HDPDYEg77jqsd1RRGvtog4XHeysSdQoJ36F",
  "key14": "3PfcwztuSG5zg39UBSMXhrRpjPrkuZsjnwvQsvSrYRTfmsRjNRsc2WpWi424ZkDvj63TsceZWZUrTSCxyAvbBwaj",
  "key15": "wiuCfwjLfrhgmqJrCmPBkbuNtrTJYS3YuzCykaU7Z1LUjKwNXHwJGm8fAy49Ui5VLycnw9j263ay1aBfhhtNu4Y",
  "key16": "492RzUcp9WxyDUdNxfJiuxLbnUaJMKmjeKbVbSu7J2BYeUqYkjMdHi6QSrSzhQZMjKLqezKRcTx4uxHN2JPhfvW2",
  "key17": "3PrmCK9Eca7UUJGa99uXQptKgXy4SUQ8AfgKPn4Dt4KrXgDwSRFS5U1kfagQCPn6B23G273kRMdAx6MMvhMtsX7g",
  "key18": "2VftQQGkh8tEc4VXjusPtjmTsHNujz7FW8VZHSaUErj3dh23aDSqbKQtM8RuwHFYDvbs4Y4fAhQxgHNnjYxu5V1j",
  "key19": "2eBMDrJuBvavzmJxHVojnzqsx4AQNbwtmRnTuTvPDS1xDwAs2Ko8ejBfTaAw6LALuHCDDa8ZW8CEGAhBivYAm5mq",
  "key20": "64sdC2MrRdctfJ4bRFRmzGCcJb2f6i9okUcrDrHm2i6LAMj1Hd3SkNpHzhmqNxWsfdGG6J8mbbZTCBWGVJZ2PVFm",
  "key21": "2WTvnKUMU3cGvxZZvgTcEncHkJhVcpQhp78YG9cDYbTdoCAhGyThfx5ZpUAcqnPYVgN2xtJ5PCCV8XzKwZiAhJFw",
  "key22": "5H8rZb2BfzbM6YKShzswtjDAFRN7RxNpWw8jfpS68Ry6Do2b6otKivGNXuWLHsp7dE5zjALpj2VheMN2Vazj8H6Q",
  "key23": "5ytaKXrtoJ3CFrQ2KUThjGDwRC3SCCEMC5grf6RJJdTcAXjK3Ez1UnEC5pt5EuBV8Y4PsyWAieteUG4yFpGe88KQ",
  "key24": "yuBgzBen8quGd49m9pgfk7eRFVuzuPohtmh2gQUfAkBR17Ro42h8i9N6Et7zAhTPeyAcBSe6fdRsQcTHvL2WdHd",
  "key25": "tLrsFgkhiU6ZwwXBsk5fjn1cTmSQHVJ6kcc7xAHHuDrWA78WajvWxrJdb9X7RMt88rdndgfA3Adbp9qist5sCsd",
  "key26": "5YXqmZfD7ThJ2oosnaNFV6Ku4E68ikAvVdriBP2aNgWrhK69dxiUd3jX4M7ipEEaWP6GdcUnosLFG2f7bicVttyg",
  "key27": "VGBujTUpaz7Mz7u2LoWri1o4KMJDLSU8LDQWNPHBig82pTXNmLmTvjWEtbwzSMZKsRBCeQUFEF9D1osR2kUqN2y",
  "key28": "iqFzz3bRR8dw7b7XLRZdmyf54pgr6wqdRPX8fUbPkVk2Gy78nro3oQt6fHxnzz7uG3fkYM4jdpPPPew3H8S9w58"
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
