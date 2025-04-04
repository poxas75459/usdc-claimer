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
    "3w6jbBi3dTJcmwTzsGmT72MNvBxeEP5h4JiyJQUmrTnk2XEcuYWdJEnHKYqJiPG2gRVW6J3Y2UdBvZ4zb2cAQfen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSgtM2uwgtYnrvTkhd5ya4NRFr3ykT9iQvMpEq5xArNVNyDUDe5v2WBL55CkWKR4BnTsb3gnnuiHJzKPZtnT3Ns",
  "key1": "2gNdHAuRYzdfpJcErMm5JriuhEGahcQSoKn9MfbD1JQYHHmnQG4WV9Q8A8SEwrRKzCYLK4YNenBiWitAWgFkEbB3",
  "key2": "BxNkjReoiL48i7D9xB1iASE9zDgXbTsrzoGRcXwYffUr2mdWwu9VHntywfnWWAWAXFUntbqb9861qpq1SRg3aeK",
  "key3": "3kooSAHEeYFJ63EPrnvAjnbdikgo3rGdzG38pNvNXsVt3FDU79JjFZSx1uih8oJ18VJs29iqQBnW31pZj6nCDovW",
  "key4": "64DhEbCH8eeFkfqkKAxY1H9qUGsWUuqWQFRa1JriQJKW1sPeouqimUGNqVNkkDv1juLBqWxtWkMBhNpV5XqW5boi",
  "key5": "3cjAnTvjfq9on2LTsjwoh1vCX8pgF91sYcYCTkTT3yaVGodNzVGrVGx81bK3fa9WVE6WubA2KCpjzybnJB7Z3Ych",
  "key6": "53ia3G6vzEuH58tVF5LaEnQUVEPNC87aohBmUVk3HGJgEGE7TcjuVhxTiVejtk4gqf3ZrUhN3ErgwN6B9hFCwMyf",
  "key7": "5uuAWNBnpZo5HqxVAKiSyMV4iKwQjmC9G5kvQR4Su9Fq8xQicebXzf7sWJY6UWzFCyBuUCudB16VMBYB7eTTeEBb",
  "key8": "3m8zhjwZZhXowvWNNkjU2S3XdxBJgi3tawjhMtg3T6brJoxaWwXuBKRaKCiUCYAifdFhbwbQPX7erKoaA4qK78Ne",
  "key9": "2pfYrna91Y3SBPU8ifGaur71cxioqdkcq4YfyLiAJLRALZ2tixYZq2cJdbsA9nxYV9mi5KhpEfqkE6PKJEjpgGsr",
  "key10": "3V2URXuzHpZMyXo1YVuiDTowTQGta7gDbF8TEDQd2Rg6mW3FX1XUKxWjcSBFsWZyyWJZUd4k9aX4C4yT8EpasmAi",
  "key11": "457SmDFDKYUyurQJELVYiUdod6WynUFs3cCM8r9fFZrCicd8VWXqtwCv2JuBSGvJUxBcFoGoNvT6VgsbtgwZENxj",
  "key12": "5xP1hnNks27VUoy1m5ArDgkpwHwMxZbyhAKj7w1icpU3W7DYTcTrzHrr6BP3xPkdZKY6uox9gPKTeBwCZpJTBdcr",
  "key13": "3fbQsonUfzPHuEFQYicUMKEf3q1gTNv4pBqo3qucSd1zwhJrJgK7P4sRFfJ2MseTc6ScRCSoBPd8HgBec8o27ykR",
  "key14": "4LNeTEd5xy3DEUPveYTmfMDo7zZoXorKJuiJcbNqCAUMZFRuk4ArQCcBv8zQh3uUGifkLMAhxb3XuYMh8FYyKB4w",
  "key15": "5XM3kctVzVzrKcKHC7Sgcx5TBdmkYECT57U2fpw1NH21nXKiceQqwWFWG79UhW5aqteroYHAVfhdsKuHDwhuJjDK",
  "key16": "4PDaeEBw5XEn8wM5TRq8egQCdRUaAen48DFJQRM2Ws639AhouCAZVWevR77mj7dBPC7bTpyddDVmaCcEKBBX2yJo",
  "key17": "4wBJcYgsPGZYY89drHvYFxjhZMXPBWQhLn5omjymQXZTU5EjdeQKBC5R4k7ie8AYkQZBFMRr2MPGyjfQgdu36UmU",
  "key18": "2c6ewn91Y5F4wjpaD8UDbUxdhs8NypC7TAYYnbkoYadMsX2i5Cif9g8ZamfA41JDMJYQzx9wsmP95egbKK6oj16e",
  "key19": "4ju3ABjCHBh739qvrJcEjVscqozaG3JBmQiDFXA9Kq5hMSbuoyFbmF6TaWrg68BmfTtKnsicxHsqdMnHqFfvQf6W",
  "key20": "Len2ojANjgb7bCKVFjyMmh5UrJ9DGXtVmYsJj2pz9e7eRZjFfypRF7w2ANJfqFPMpD93LqUHdmDocv5KHyRugrT",
  "key21": "4vVoFgJGE3Y6f2GDqkCW7pFFjCNZSDfFCZ8sL1VxJZweFFBSGzSUVE4RgrrgAcYxaPQkeCj5QKbQyUTxW62ZVyZh",
  "key22": "566y1FkSDt6PhQM2Vo6XSg7aATpjQn9EF7SNwqQiMBKtYyFPgoUAisCfaRgnbHq6r4PJ4Y1ZwLpfmomQebWwQDvc",
  "key23": "5dnpHJNSzpgwp3WMeoa4CH5vaxMpqKtdz28LPzVAuLKMyPrwyj34qAmRFBUaAvfVnnZJ2YLQEqQ2GRLf147uxPr6",
  "key24": "5oKqXCu5VyPcixVx6t9eQwiubsL3n7zqPusvH8nDw3G5T4GVkR5sNSZynDJ3MHadjSm8sT1WggSPggSzpGweyg1e",
  "key25": "4MfA2Z549ASmHSwpH2bcTjcUyYC5DFjHhzsAaeKJ1M61gKxkq46jMQuMGsrMqFDhFJKL9KKc4DTJmH1TPGC2Pc1s",
  "key26": "KcH6J6QiSDtrtkv8ronSz1AHq8mnFrTtDRuD2J1HteE9pUd5Uhd9tYS3eQJMvDKRtUbTTBSj8azasCDwvieRkFF",
  "key27": "3C72UfdxCoRZeTX1iw5VRxsGsmsjmamvZzfhgajFBFdEda6CAsEKfXMQ4gwQ9bDHXLtv5oXSBBd7wUvjfAZ2FKeX",
  "key28": "21xdw4VBJTDxajTyd9WTfn7WkbpMf1tkmMn8ewHdHQS8NXArMntKgLpRkxJ3i4tUD1CtUcbp9WW1swizRGmgTscq",
  "key29": "45MirKhxD1mEV5bZVqjAPi4B9jHGH31bNWAzhy7gsBpYQvNGcKiHgyuRUytYJejHR1wyk33ZisfQtVDzTosAY6dU",
  "key30": "2ENTq2SgNWALiCXFW2xQ24Cen4Qy25vr7LsZjfMHPmtahTn2FrYSVw3vDLXooGiSX1jNWVBbUqLH9VZSfDZTDH2L"
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
