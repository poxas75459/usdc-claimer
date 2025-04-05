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
    "42gKCxHBjW3SrGkkAnhjAAxNbEo8e3T6yxEPL8Zf7wpgFhoRZAJmPUSoUJe5TDmWSwTPVAajLT9Hq1s4jpKqyDqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rhZexwRKbL8a4EkGkHgkduZbEzXKKG8aLSFT66hKf9uKb9v1CwUzP8o6XtSbSk3w3eZu9UjaCX7piyrM8CnHxQq",
  "key1": "5QHzbpbGx9zzcCg7s8KZRUU6vAHWdVqPHExMTBqVyPrdsgFM3jprga1RmqckTFxpywUi9mCUaz4Yf16Cyt9y4zkz",
  "key2": "56v7xCGgVXHKHwFEqCKK4L6mGwBtHSUkCKi2VKCy6dHHHfUfWzzwnMmwvLytjWuocy1Mnri7YaK7JBH3uom7bfct",
  "key3": "5PTqQCjZJwQ9QMWVtCy5Addh4s8qdBjMoSSyqpTCuwcYzBjGtNiPiZa9mLzfWmUn9yrLCtaPSCVXudb9t4LadSj2",
  "key4": "5Hb5QvWR1GyQ54tM8d3XR341WsrqENRqzejwk91Az5Aa1ptr9SxY4D6YbDvJsYZvVy2PE4BTznLo1SEiq8unZ3uT",
  "key5": "5YjK3LtA2JGtegiUoPQR8ZbYqWhitr83y9QjVH1JxqWnsEYQH6gHJFpkm7mQ1yCdSUYdvJfBJnve4t4rfE2CGDie",
  "key6": "3GL6jaNY9SR2AhBzyJPw7GEzCVinMevJi7boNmYXwMXMPYHmL3hfsf8LwTxgXUGN4vyPNjuTF1ZetnLRdoMN6znD",
  "key7": "2CBrjbchDrcNSegXuq3D4w5sQgKEDv99QKrp7kxYZqYr5mTqAvEFyLnCNyLw9mnrjhqpGDG5TihAwpzW3Uvkdydy",
  "key8": "5iZbYKxX1wH9Atc54wRxH4DhsTofcab8xuQrY34XqEN2ShSgwM6boEoKfFfaqQ4HU5RRyjXPWyprLUyvu8JSAJPr",
  "key9": "4vSuj2jBpZn46w28VyiNttYcg9FueCB1mxSZjegZMMsS8h9dCRuJFung4QFAdX4fPRoVeWTWe1DjgRZmyqaPw8xe",
  "key10": "3dWb9dBCcj9TFHbJbyyEXXY1ZStnZHuuuoX4T6N3XAs8jQoQhMnWAeoAJNZPQ7NJFWKPr7gcuEQULDjUFHegP46k",
  "key11": "3gv9DUV3ytMatbneXv8H3KsCc195SRjDqet2cFm7wFWJ1NWasSLKBjc1Z7XMWcQQVusW56k6fjaVdCbi74fAbEEk",
  "key12": "j5FWp52a5qjcrYxegkd1Yek9RUtTbebpurRYSqSNjpDeixqSqBB6WhLxGbWJbXT8fLPnVbmh34mssBf8Zb8hTxC",
  "key13": "rp8Titm3v9bVWewBkKkgQt2nscz8dUgXdVG92rMG8rZdd77NkWB2w1XG3XFK8yeNg5mGbecM97KUnk7w1RjSGCk",
  "key14": "5cyAHSq6xKFVkHi8eRwai1A1rusLZ8DAmAazRMKwfZGRUv98TCLEybMyod9H6nGMEAk5WXUwGUWuiNpiSRFccHBn",
  "key15": "5sJ3pt5gTwo7v1UJ7ZvYdtaGaAoFBTWbr2prhGWtVVrPuH6RN2JDbDZPwZX6APhd1stPD45fwmCEaYqLNy9huPJY",
  "key16": "57orV2Mqpn4eBvTpNcUk9ht35EqrpQUWoHhsJGraRUcwKncf49Bo6S8vEJZ5qE8e5Pcq8PbSEh2cgYG1vDNU3pcf",
  "key17": "2BHG8jM1rk6ofwH2fNfojkkeSdRfVvb2j2V9YSVefxBo2vBf4QwSRqC76fyE1hegcrFHoA45qR8K9tUUbSYE7djT",
  "key18": "BGofZCa6Wcr7MsuemduS371MokbeAuKqKXv5DdihExWrtxYDpvY2Fgnjb4woVxeL6bfGfcZrN8VC5f6v9HFKT98",
  "key19": "Jpy4KbbyCxLCEZ28ve6KJUZUCmSxZGDcVrYLhGqYjK5qAiX2GRbtg1Df4rgBGGkaXESVT5DZujznMkXHCrbD242",
  "key20": "34NFBTuZeDSLvK9D6BXUoToQbuj6qMZsSYwKkioqag5p8WvSw7qEGeRinWVk3dgycJNK2LoGDBcqpcNhTc85qrYJ",
  "key21": "3VdbojmhvzXZLa5oGYwiD6Dh1vpv5FjsA6fbwbzadSnPQvADdFVuzWN2qRgSpV4EN5ivhqoHdsWM8xQ6k2Eq4e4p",
  "key22": "42RLA6HnxhzNpUC8fKeoQFoT7y3vxqvHhK1oyArf3i3kgegWqzkac8MdqTx6qpLQvsosQw82ewAUCEakznxPUZXS",
  "key23": "5SSsF3FgVmvL8aYJwnSKKLqW74zoaB94owPQ6kcZiHquFnQfv5BD7CymSPb5qu2m5BNA1tvrm6juMv7kLBj7KRwx",
  "key24": "2pCSTH6wCYLmjtxZHi7u8mAX2dGhDz253YYsvKj6iP41ytCo7BSq4ftwspiDpAC7dNFyJNnVnV1NVB8NfVqqzyLj",
  "key25": "45HQwMi8WLuThykHo5RUJBC711Hr2g2LcKEbskEKdRpBuyqkXUc19Uprfasrbx1KVRsMqzwEhgz2Wz4653ZTncrk",
  "key26": "2JqCq1Dyrg69KBb92M7N35BhS4zmyhw3TQA2WkiM8mLHDwTddT6zsDAqwRDMEuR5BnXNTyHhsVJwMBLoBJgih2Vr",
  "key27": "2yQjtLPidAm9c5nd7qoCube1T6sBjzEngA6rBv2zzsWQsFeTqxkMZfYzuKT6spZ9Xt7jDjgrkCknQskGMmfRotV3",
  "key28": "Rk3ekPnRagJakasjkYLGGntpcTSMcwaR3nzw7vEjjfxA2w4fuvXPXhDttQh6K2T1om6KLWguvazuemKSSbHhACo",
  "key29": "4Mw1WwwRHYBCwjmYqVR6HBwKKeUX5JJ7768CK9aZ4kf9NMGpyF56aovc5FfsYUHWiDkPx3AeRVB5bjLuPGPn1HaV",
  "key30": "31mLhVGPzvo9ZmVF2iE9EiwvXkqcpJpTFtipvav1g1Czm3zBgg8z1gx6TwnUUTJybtJ2kM56QUu3uieV4mZLnsZg",
  "key31": "5KjtKBg2ghRa73CXNZhCRzJeaTxf6ZZMBE5QhAjRJwt6fsthduzjw2acv7hXx1wsEjjgYeszDSjrzF6Q6ii6X9LQ",
  "key32": "58uREFqN7EBKt2fSuSNsXqxvdeyLxidGbN4Bsxmz1RZthFYLnKK6hngKr7ut7g6r15HtZ1CLMWgwQCF71bDxzYcW",
  "key33": "3Xp6eHdjtRKrH5WkvfmqkaZHJHKew1dv7TQw2Pu2JAbPVnwnQfZCPcrQ5nz8J44ffUPfgtzAB7dSFUtgYAvnfzSF",
  "key34": "26C7wJPYM28cka5WsAse9NjCECBEwmnGBqA2y3LyTNiGbuEXQxSL2gYYDcNSW9rztAokRPopNjnwo8R3zL5Dv4d7",
  "key35": "3Pr7ioasyfSzd3UM6tECW16zjr7Mbkm1Qw12RxUhqrT9RNcya6bQeQzLgCB4gbw1CE7pMc5Ujwb83iDdrmVvcuft",
  "key36": "51WBALjstLzMPtBzGpnFqbJ6agdn1AE7cTADar6yy9dri8s5YP2Bbwze1LCwkm8HkmBZkHGbxDGXMCecn67KBuPb",
  "key37": "dFut8GUxooFWk4Hc1CL65C6H85KQmezTNZsG63FUWhr6zUht8cAmTBnhtbnkLoZT5i1iTass5iRmJZbfoAsRMbL",
  "key38": "2eZs9EeUq7aWgYoiwNZvD8Q6p4G8XCnKSjNeE4fpeRmQMa9K96bSRT69JCeKPB6mAGwRDNtVhS8GgSUMA9HYCDyR",
  "key39": "2QavuFCH13a6wLhoEyzGzKcHsQD8vqn1wZcZ46xjbrpTL8PXeaTdj5mJZU7rrdDPAP1ZmB44Aae1o6xYycmPTxbc",
  "key40": "2jcS5DLUwAaJv3SYqJMhv2z3XE5pzzErpzCpSPyu4fCmeUmxGJBDnT5hJX7BmsDuBSiRFkopVY1SPB3Cd6rVrhoc",
  "key41": "2TKtRxQhPqchpurKEkG4naDJSKCkq6bDxYUZywgQiiCpJutmqseStbZsigyq6dk6AhFPAtqXkBKURsReWLMsu9oW",
  "key42": "5YKCDtCbuDLUZe2b75RH7AkgUGuBRN6xMMCnmEGwdZ6f8JB4XpxxVZFicH8cU35cw72h3h1KPLLt9wYN2HMMFVaS",
  "key43": "3ystKsfFuF2p3X6CmMmdZtHqWkCV8ymDTSesxd7rMJaLQrrQyFDQnASxZySg6xCCs9eDHRHVCaMF6MmQ7HRFwSJF"
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
