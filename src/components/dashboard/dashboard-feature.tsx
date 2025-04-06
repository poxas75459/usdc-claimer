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
    "2PKQZT6XYBhndkmHsNZpy1fPqUewrDaktTz2oMxLV1e8bVuKTpZfTVwxHuCUWzizdb6i5UDPgTNBkDxCSSY1BSKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z69kPXtZQu62bSXmuugFAU6nXaSJo92ibYnmAGtMtXQV9neG3LoHCBRXGezfRGRf5Z5oDRckyVdiG9VDJsHxeHN",
  "key1": "nZ7szGVmmVfkCorqsV431ehUd8iUS8evmMX8tkokpJVnUHKdje22NuQPwBhS5jfwqNV6EDdQx2axphu4bXSdi3x",
  "key2": "2Ecox5KT65296xWmZdmGH8XN4nhh7fRpS8Yd12eLQcvknJEhGHgkU4eV28acUvBkaptyVV2sxVCCgVWKeXQwxLzb",
  "key3": "37FRYsMohzCKddiLpUWrTY1QyBPNKznLcAi2YyBumzd6CZJ4UubdDkETLmqnJTaitpMgo2P4yGFHoKGPP5XsxJjY",
  "key4": "39bYPLHzxGNoFxk8KTDhHJ8Xxo9qhbKYPFJDjRfP2iukihxPMVJbqv9zBG9VoRx2Z9AZxAU4FDmCBufdNyaGnNJm",
  "key5": "2Bu26QvdS4sLQiUq7A8qnDgra6rshhheYgiwNZDFzf2ymyCgDLFPGnVyFPqgRtkGKpwtXi58hLEo3jRF4xSj3pDV",
  "key6": "LvtLaJcrsYTNJafWdG6h6sLM9A77mdd2cMkMobrckRBchsqvjMrWgfnG56r7kXtgPg8thCwH2t55MtTfxX39DDL",
  "key7": "4sK1uF5WSdw8igjaSj5vyHgGGcsyDaJXi2pupVRe9fShgWVDTB3kV8F1BdEXNFEufqtHTzqw7owG85APsLcz6T1u",
  "key8": "2iKZFjzskjFckeVyG7Vi31cK7GJYyLvf56i2fvEy3rFevWv4f5mBAHYq6zHJCJodtZ8LMiAjurD6MruUdY7fEMpE",
  "key9": "NuceUJoyhEUiBgt376K5c8rFxyxqoAjM1hhLNpt3HhGideKCEtV9Wuv7TbC5VwuBjyDxdPHsCqRmtMDc865jM2d",
  "key10": "vywc3UPGMTEqhP1RvE7GH9PNStRVHN8RFvVJBcd2UiDoeh8BV9Kmv5DADz7ySQcT3FxK64SKG6VHiwiSnzWzB9q",
  "key11": "5zYfuP28eWuSJXjAaUcovFceGNzJmBeqWZHn9ixFDyz2DFvtnxXeo7gFQpQRg6nSddtXt8ufRoqLyyMVZfjRRra7",
  "key12": "4StNJugaDcdW6KsdZ2dm1tkBSpEZZ21YSp7A75KMWnDKvteTEEHNXdHrnHXJwJBygLhrfvdHexnoSzujLdcTZXWV",
  "key13": "4MdhUJ2eGwsj4FdNMFaDDLYi5LuRLPpZU1GRjVwmYCbgUsc7sR6Jc46s42vNJAXpCFjrMMdNrBNhLweri3Q56oze",
  "key14": "3SJCnaNZGEvyqeAaxpyNMZXdX1owxY9ZdW4BPVWVYL3qih5EXqFM1YkYfpo4VjHEUgvXu6ccNbsMWLvHwG89vnXV",
  "key15": "62UM6WuHA9m1As2Yu9cZN84ELPJDYZSYRjSsR1J1vhmuKYBYJo8jbAsTVibuvu45rRvPHfy9Hnys4e18ueiyHmGx",
  "key16": "3XKrcMVj7k2iVg8V5y9R6NdRPLHcobHsoE2ExipdcH1YmJaFihcbJCn8vnaHDgCdnyHSY9GZwWBugSRG4DsaJQrw",
  "key17": "61g7gMwhuPj7Nhu913yBX6EVtKLtNpHcJdmD7Aqd3ezg236B3gvpmizC43c7NG2ecDVM9FgK72FyGFf871ZroCnk",
  "key18": "4CdRHyxFfsrpcEh86DkEo5WNbe5HjbWZR3UtiSpPByDnB1BCi5ENcyrSBDe7iWK5PA9AWCbjqfbS3b7myyCnPK1g",
  "key19": "4KmaHWn2zovE69W8Ax5B4b9KFk5fw1BppibFp5VSc32G2G1UdrckYu9DQNqgSXjt2qZpmE2fdQzC34s2p7zNNyAQ",
  "key20": "4Au3qjLuEkK8C5r3g6juvHgAaPZLRWcTs1PcNvW4a88wyVWd1dZUbT7o4NHpnVLfgXcBhqaHK8m8qR9eDgA6cf3v",
  "key21": "2N6wGzd9C4hzXSrWFintRVTuDpzqGfaZjqzFFt6yn3ihhXSWJaeztCEbZrfAH8xwt6XxmfzpnkC9oqURkAyUHJaH",
  "key22": "656JoBdhVwf79tcyWmffLwKyB4NMPtH8hHKWU8gmBPwAscszUGT2qFTorcLVVNeeC5bgJktEGSrH4DPmfWdew858",
  "key23": "2FsV9WEZq3bsdQDBrhXYjhKDcJRJbnooMUHq7B4nAhMmexumpbbiTsowq43pcfqFoUtSEGpEATM7cKbCfYQUVb4h",
  "key24": "qfUMTUMNxKaJ3UyT33DdqEQHPpetuViW4S6pmdg8LceBAu8qaBqXMXfDDoQF2ZrewmJhbFavSceYwL41STgmDNt",
  "key25": "364vXp5n1FRuWgtHrvwzSamCaBv1d6fV8qjVYhe6mD1vBAQWJXsK35oz4QYRqkRgqqfX53fUKu2wMs4Tcp9ovPax",
  "key26": "3t2toi6Lx4kqzakXdaR2m31gbRzZtHmgHqfpipEt1m4BLwLSyZxcbKm9BD3eTCRRuJcd7QxqtuHYeCT4XbVNrNZ7",
  "key27": "Yrwdnc3qEWSpZyCFRncuBweKJLg56CWrGAA1ooZ4Ehp19PDiRJQZ2B7t84VzguRBDQjVCSZLMBiTbfZ6WEH3djF",
  "key28": "2uQTXSZFbS9Z9hwn8WPxWYW5u1vkBJpcK33ecnQxMHikB7TFjZqzCQRNr8RUqwq5fY2vevCVac4GsKwiCdEu8sqG",
  "key29": "5nrAD1F5uFZxLhsshbpGhJyW2eDejsLsaW72bfLubVtGnkrqHWqArrrTcHcnADrArKNAsreAwzyMyd11JWWrnrE4",
  "key30": "6wGfQZ6sZ841R21Y8aiY8w8TCbdD84zijyzhZZHhETx2qcqMFyH7w5K6WYFNeY85EpKp6ozcCoPUjRWKv9Eu36x",
  "key31": "uJ1mYKYzm1bPtbMmhMPCakXxQprtykR8nhJxGPDHxbMDVso2bRhWoVNwz5dxi8HK9MdFpNKAuSnX1w9ycwUAsGS",
  "key32": "2sFQALsCRLRw8aa3kGbQeVbptjViDRcRSdwKwDwXE7BybKHrvBhAqoqYeCUwujBUzWSu3bJCXdufsqyKupsDyTDs",
  "key33": "3DqTiFR5yjUxZAAF8wKpEQChfgaM8a8gXCUL2khwd27EEcT6xRm9ZUvNNtj4QAoMdwFUHhfeVqR8X5gR4FzraNGD",
  "key34": "4bktyqRoh93aa7qSw2Dn6rer3E9GkhKqG2YAUK3CpTm39NKJg57RWPNeuE8tqQAYstrGXsibEMQ2Lx8WyzWv4Sii",
  "key35": "gUiifBc1cXe2sLeqcMtoKAbv8cpyYjomn7NLh8knbAMgNHZm8MuTCgyLD8bQZaKdprsmP4JBHpJYM72kr6YdWZ4",
  "key36": "3ponxX4cgx3V9Xp8HjQmWGmoT9yH6rTote9NqArSuwBWoLEUfKrkhtQN5xKcX2fAvgFZYyBznwUxbUJQa45rpsjJ",
  "key37": "2dvgjp1fEwQBh29tKSPKKa1TxJxQFyvs9kRwfUxULi1NK993YYhusNGgdWGeNiRMDLnbjjwS7fAoR5W5Ahno3GT1",
  "key38": "3ftM63gvdFWAtt3uRSGFvdrZ3mJYXWBaSn5Smn8tEXXj8xxDSbH2Yzz6Sd7NiZ3XBm4sG8VqMaiEYYox737inq32",
  "key39": "nYtUF735ozW7faLdBkgQWYkinUEvUHfKV25nHAaGM5WhXUnwCcfy7unjQQpDLQfLbiD9mYFoazfB54eUYrpNGms"
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
