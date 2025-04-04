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
    "2Zw2c9Cm2MZyMBcbqESzz79zDTD4P84VTWkqjgZGXiZHRpqWtzxyi5EwUE9xmW3LjTr9FRT2B5nwa6PYfBnPti9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCzt12pR4hZFwBY8ttWsfBpH41kJPTWJ7CE3vkgkAtvMaNXmeEd1LnHzm2jSH2L1mGxaK5pSRgQQWKHSpVjprgz",
  "key1": "4fgmtd1XznP8XppvZ8V2yp5Yabx9ArrWcuUtbzKBVfdVSLEQpnwaP9UDJdUx99DezjKHX6sS2Wh3Hmn5on6iMKJX",
  "key2": "4ha5i6fAZPcbNLmZqEyUYysP1ZgutK9odkGng7qLrLJ3x9phH3Ein5QkD1JZ8a6DXciHuhB26NMaW1TEfGrqx6Xu",
  "key3": "5WYBHoQNZ9WGrxLFn73CeuNPrGyykKvHZD8rTVSAAjdX38Wp9XjnDcbbGCp96qe19sY6fYcYyvsXk3zY2SeyVcpQ",
  "key4": "JwkL8A2HpixDr7LKYHjddbD9zYFVSCDWXWkbE1tLSFHwcTAe6zMjCG4tyKS4YZZMoMQJQxKoAQyweuvPNwZorP3",
  "key5": "3tZzkD5HK2cChpEVED2a86sLL7QdzkGYsR9bRYqJAb52srEH7CFvvgd44VsJTrHZScRmoPekkeo1p7wpaiMsSnkX",
  "key6": "4MK2oyChoGUDwzs6RM38p8VzrAepadAFpeEYKko1ZsHiZFufN77iBEqMtkVm5nrscYWbPEAM3k6Y8L3Wp7TxdhtK",
  "key7": "4y5BzqZdAmf2MsLa6xXYBjtWsAeEPQ3Wr74qV4Wv1iUGkNn3ohJA1KpBchTwuYPUzMmNyNyvZgDoKAhR3KAR8C4z",
  "key8": "4HeFCt7Ppimc6GNcPeHNE2Sjk9aNg2JpgMzef8p2B8r8FY9vtuD9X4b8CFjA6m321v4EAEkQoU6H8vFWUpUhuj2P",
  "key9": "67KDK7i3e81LYWdn4ii6fzspTSW5qwqPnx3xQaKD6k3pp5AwLpCCTc4PXuPWPKSidCinAp7Fra5vTNJjpBjfh5co",
  "key10": "2gHwVKBTpYmCHw8DFJyJNDRMPXBNRosusa5VQ12PMuKGA95TfBryGSicA3yP8rewbrG77g4KKRMgBahJqbN49vnY",
  "key11": "44fXU9WQL9wFxy5HYHPU4pEVXSbnR9MkuVXF9r5TXT7zCUhQYq9ucMizBVvhDky6qtoWCkMjJTkLVcDxWiKDoL6a",
  "key12": "3UP7BqPHTerdzHEndPxx7ghdYd2nMq3sav91AjwMeDvSWTTpndDoZEqBHWgcBEGRYLfekcLsugtDw8KyiJohKdAX",
  "key13": "62kNuNZvzPzPdNN7chxApQrUQF4NfevrDa7uAhL2rtVxr2d4TGUhbkg6fwMAWkSsyhaXoUs9eQVDrVn77TFVNeJg",
  "key14": "A8nCj5ZWAf7nBQy3nZLro7PqKXH9L42FWzDsV1TdVzU9Wn3bpFkZp3ASEYq1TT7d5HsZ1uNEFVt6vu1Kr8hdRjp",
  "key15": "4VusHHaRsD2uvw84u8LxEpRiLQvkcUvmmBzE68j4eotUCxmhut2gQ9dBdmLXZGAg8x3hSTShMeXyUr4RSEsp13nh",
  "key16": "2rVFwv5KVfAR2a52YT3h2CUniyun5sNHNhHy7EUvLf1fDHHWrU4W1xMTzJay1JK2Rr3Pd8hMnUiziUL78nnk5mzw",
  "key17": "3TJ8eZaqH9MRftWpNwRrGTqigzhGbb47VN2fwu6Ckeg7e224ymgZdpTvJvWDf5XanWrAMhuXsUqiMHLxrRKHQYHk",
  "key18": "4QAHUW1eTiLnaVvaa1mZKbogyFwcXxBWmYYbNfm2TKumxe6GqMtVjYXjjKrvecNkmZndr4BuFsNY62U5UnP1mfzJ",
  "key19": "4CWW7xKZLs4pHDwooeXj3vy2UxQpfhf1XN2b1SRy5vxaP6wWguokT6JGiy73WEGZV4bBcD1LraquP5w7eEMU5Amy",
  "key20": "gJcTHDB4jzWRwMLQgNhsU7Bdnm3wJghYVknimTHuyFCYbHoWAG23nRMEj9ueU8fGmqjCjSUoozSudZ6eGGyjXwy",
  "key21": "2dkoTV6vMWhv5p5QuDX2gb3kH7FnuWyzCcbcyfTAJy1jmszHYg72ZhaXTbRWu89dR92xSmSUnTc755tPebBrPb6Y",
  "key22": "2upbbbEFyH3dK1Eb4gtmxEwLuu5gPF8k4eypR7S6UysnUbrMPMSKBx4e3fy6Du58MkJ6RfJoWzVieawhFaX7EneJ",
  "key23": "4EoCbJLr9SSv5CvjrtaiwCqFq8SffUEPzn32gQKZrMbyi8pJTd4HYeSwpa3Ydi3uANWZFAbfTh4VnuP9V7p8EV1s",
  "key24": "5GxUEPVKQkKcFvb8pBr6wN6qKB3ef1c237XSCA4V3mdsfjzg7fzJDEohQZNmPuoss7vdRg5tERkiCgYoGMUwEQvg",
  "key25": "axvDWadn112M7CM4ncXLzWKqmzN5kwdoSiFVyHVH9aQosw8sBnrepPAxyyAFTbowkNm734LV9BJ6rJeiiS1NTLH",
  "key26": "ajsJqo7w8E1hq7KzWKjJ1q8RjeRPHFXN9hwCE4SFiqk2nCiHNTJLFvnMSPgQp3WezSQzonGbP6Yy1bcaBcmXbAu",
  "key27": "47oJh3ZewLMEWt4ZucYDRePT38huD7yg7D7AT4KM8rBrqJoNsDNqBPbhjPRbRwc3bwdeRcrWHF3TWFpDB3KCwmxu",
  "key28": "vVG17swr2oQzVqPj2FtLUxcWPrxgdoqJyurqpt1vHv54e6TZpDx49Lzi9g77dHHikvFL2RpP3VDmxu9qsARWE51",
  "key29": "58baedUiyx43wbGbNMt7YaGnCRa1RQLbzJiNQMBBjn8LJVKusq6b32LRj3xaCCsR3LUwTWEpberS4ySRMbW6pWg4",
  "key30": "29n6umuRVVxa65UqWPBEmKGX2dBr2UvcfF6Nivq1akLopDSigsEoVA3PWphyMsGkMygBCsQabApxB4i7NyukVirn",
  "key31": "q2z7TxEq6Vy4dChtwiVgFAqL7NTMNwWQ1UjDbyNkMWxi9TrixVw9kR1Rd1nhgcd65jEFNeZxDSkejXgHYSyAJdV",
  "key32": "88Q7gD8eFpfcwWGUiVJJCrgDaKSrPBZas7teCuJnBFPQq16Q8wtxxEVVoxvw6uLFzKnFi1qtekLAPYD1yAwb9mt",
  "key33": "22HRzbXcaW4xVWpZ8wjAaz4cAswnxVe289wuV5yWEb3LyfM2EcvP4LhwNNnvALHWiwKsMYiS6GgoH2Fbth8pzqDD"
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
