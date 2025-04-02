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
    "5UcX8Am9CnZF7bJkSwH3GZVPnwFy7ERn1BbPMcqmwauEeQ62wHK9AjXicwtXfXQMmx7DRQxmunWK1D5Kdku39881"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6155AcvN4e6L82i5Aok3TsQvh1TkLp3j4N16UaCPenmPTZcPYyuw6Lq7BoPXbYjfkkz7JDUDN22YUHqMbx85s8",
  "key1": "65kWNWJJNog3HGxdHNTX6BnG6JJFird9X6K71XuKu3jNSQdjpvtB6d44pfYtA3NkmRuYMsJN8PVp2pLps28qPEaB",
  "key2": "42meEYXa2RVBN3wawGh9CYQLfD3ew772Y1GbWyFuEiL4HcLNFtGRiURE8HgxpSuUqXQgyvBUjAjAy56rknkUA2Hw",
  "key3": "2aH2JR5Hc63rt8s7tADabBBLQEu2WmYjZviNwZBr5yUDz6uhWJP7uwiMMdo2hBDhABrgFy78zDU34zuj4H3JgbkQ",
  "key4": "2eiD9RTg2iqjDKps1ncuY4Vt91s4NNUNggWDrKMGjjZyTWpGp7RfRd2VDwEiK6iVSgkLR67aBU3HmxL6xNWsQZ8q",
  "key5": "25dhL1TW9TXgy6ejMMCLGSX7rsEPyvC6Z7d2uKjeTZDVkPUsYYbituimbT7GG6huUy6XFNUv5ee5B6FEA8cg7rLF",
  "key6": "43y1Vfz5i7Z3s8EPrxXJAD5tHzFeez9moH1VsLkqtGybaUjRVQr36ApSWnTz8gQLMNCiLxJZ2gZpXBsfmf8yMBbG",
  "key7": "e736BKzSiGCYUXU4jH3E1RDc73MhZY7cBzEjK9CasDCSZTMaVknCNSHVzcUHibQmSeSEeyeHQXnraN3APXUAGPq",
  "key8": "4Lk9EfYxS2ob7TwoFWU8yE29LEK89swsdL8UTDoBZTPjqoEPoryQECp2Vfd1TFC9qNwQLscvth2YhrhMkdLCWq8c",
  "key9": "4Qcwg8GDKXMtpsS83coYceTVxgEubxc2XLmG49b1CpTEqM7L43F6DYYGPSRK675RZFRUjGHHtotK5p5jey9SErjP",
  "key10": "4rSVhWSGBPDGjAB11Hv6L1CgB9ie7C1vj8LQU5tQfxgwHx7vNinEpddpyfDvfk8jgshdYXv7AEnbz2xCthWVVVAZ",
  "key11": "3TfzLKgjtCLYKjXU9W1LZhmWfKS8UuSL7JGD4vnKNNvN7sWZffzjFh3rXTSyojZRTonVfuHUGhTCzTRwUBWfoejw",
  "key12": "hAhGdRNco6WRQa2BEjK116DnBGtsejT8yahRKUzX5cbBnAWGRCaVeCYfMqdsuvXB69XSH1NJyZwxtBm29enKSWu",
  "key13": "4EepHG4bgUPjK3JFttoWqmJUozG7oDejzGfJWkGTn6abCBju6FcmLjnqFUEaYeA9zt4Z9sgqbgKeay7G63kAKdw8",
  "key14": "hoG9qmWHaKneiJWEVYWZDibjf13wRTLE5gRX6vRS2evvmeMtpCm2i6jfTiXLqppppQjy6wtSyzWV5HhavxXCLRo",
  "key15": "45TX5iNc5meS9Po4m6p4PNc33oTzf6N5twwxgLEcyZrY7fNLbapfG9CT77xm9ehjAk9nZeN3DnELqNt5dzQnAiSi",
  "key16": "4Hp2gPkVidHhRqNBrzZazRjzBWnUCfxyVo1N1kDQfWpGT7bDfj5yhUr4EYbvoFA4o3JXsKUE1Yj9ajXsWz8RiQKQ",
  "key17": "4wihhXNc5EtPAHASuC8intitLC4UNAYF5SJVM3KhU9te6UM7QXkkzRiq2Nb91pGp9fmcrdzvEv3m65eGHqWasaex",
  "key18": "k7BJnkukwNuiDCYJYnWnxYVYXg6DWtDNvdRdnRJmYr6FTE2t8qMyMWBdxtmCvk3Ejx4EteikMfPi2PFvVs3qqbH",
  "key19": "4zfNo7XwePjxvHztfsScVwevSKXKgEhoTjZ1RQRNTrXDDDMFkSFLMA5FL6QpNDBgcWGeGFVDHDWu4Dfh8ir3WUtw",
  "key20": "DLxKrutv7zQprG75khB3ipUyKybFyubB33Rv4Q9QQ1xvS7Ci2QhXxLwUwiFjTp7mR4mnPbiNAKf8CAvrd2S1FPq",
  "key21": "Jf4VBxv5RjkPoj84QLtXzskGTk9CDC8iQxkNaqQhTQ1iDRMuLPN8vCNgUtT2V718XuZwiSEAyU3BUCRuqZBsowK",
  "key22": "5L3GxYJjBoKWfNy6jRenTmktyuGgGYF1pSCF13YAEbxjK6ktDfHu7nPCXt3YC1VjZMGayyPc6UzTPARWRJi4AgJw",
  "key23": "UBcEVaDbC3S7BitjWzf1C8qze3zHNrPcwRLQrWKgdrWkfK3Ve866FD5aRgt1zhaSD4FgZLAwkAkRLQFeCL4sW9v",
  "key24": "5LdgDASM5trkUsDBFJ2RxM5Xd1zdwFsJtFZagsXx7jyebMcK3VnxwsJwmDHQqWpusskV4E2PmpWD1u3Sm7M2bRya",
  "key25": "4Td6fAbuNSJVxN3n5aUUXJMZzi4W9jv7GBhb9LxgxGikVJW1AXApUbJxgAHLiLaTR43XXPAV6uasz24QZLm1S5qR",
  "key26": "34KCuLnyPqLn24pcue5Z4kjSJq8ntnEtYjjWak1asWsRnxe5ftRAHpBGUETNo7daTvmSG2nB2M6oEMgmbPc2vW26",
  "key27": "2N3dCTPRVRwzVDNxrhjftoMKJy8Ek7ECMbWMiAqkML1e58dYfdA6AHPJoNeqGndUVKCVEFpHkkCWefKsV8tpZtZG",
  "key28": "2SayYmHAVL95vowfmWbX5pYVQBuATEkGn6Rhf6wdTQjoX9WJ1zosfzoju52VQKHz3tmcEpeVxx6SRdDyxUfBoYuK",
  "key29": "LDw6RjuKdmNVV7jeNCua4cPsAx2puwJajWyUuhr3h1tHmNSD7iMDfCXcxuhjVpXmxCDBRVBTGsn49hGvS9NTBRi",
  "key30": "24JAQfAPsKf1JFF2gng9pTZCdRJczq3sNpBWz57J4tV6hqFDSCwsvTaohEqKcastuy4uibZ9iZp2QgixhWbvvix2",
  "key31": "8YHstKRh51VWAQPa8ZcN78frkatcbii7m9CtS3BqQAf4Qo9WViur3yA58j6yFUhp8o5ZEBjHFDE3Ge4yiGfFErb",
  "key32": "2PLTKXEPSq56b517DpZskDPx7g5hppGruExmhFTTDset8p3PxNYEUuL8v6d5ib5rR6Tkyne8rVPw2f2fjB7hwUnv"
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
