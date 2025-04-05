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
    "fhVELarSKBrhLExyczsdDxGytu43vPcLFu5ZFyAUBHp5XEB4D8NdZLeDHSqowGSuZPt5WdjbDCCTLMRuvXBeRYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gULBKNGJJ3SoFi6YuAmRrArWvDxu47ym6cFAzP4EoAbp1zGgw4vZGxuq67rHyNhz5sDNY9hnotVn26kninYKQ3",
  "key1": "vdU1RMi71m9wpKU6eBg4u2GehUBcHPbBexiGh21W15YnFPbuwk2W1gfMX5tp8F53Yhi1vBAqYkuWpDfnKcLYYAk",
  "key2": "5mQp9vGKkaP7AVb138HHmo4LcAyRtQCvN4uKYFzA68Pt84vU7PpoYsqsa1xhJxv2f3HN27u49KsU4wLmeLMA31u1",
  "key3": "47TNkmpAWfFao7uNyxopApN7SosrBwVWVBasGTjH66cNKQPu4HLeHKyTjgCEyN5FaTSoD5CYzKLH5ZVnnoMkXPnk",
  "key4": "2q8KkkGqnAJeR5bDL7xgRuVgctX1K7qtUhDmcdvXRC4hykKb5pdyNw4twpH3sPDk5dYUbfdj1pHPuzB8MhgXocVQ",
  "key5": "4EtxGptUoZK1YNeVEBJVtGLRZ2kekLgoBtUBisWcdTexrfG78PbXL6bBtgVebMZ2AuHrnw4og7JKVRuGN3DGoCTz",
  "key6": "pfnCB4BoFxTXets1TVi9qxkHmAkYneGMLiR8S5xNfDa2x37By8MA7QSKC5Nxmewdux665CRt1Qg2Zyq9AWmHbnn",
  "key7": "5rvP2yHJHuxCtvZ5XwSKHC5zEisYvBBVYaecnobVKEwurWUyZzXmVXFPzvTAQiVrMm3gCa9UpRHbtZqTxzL72qQS",
  "key8": "4roKSZppju6R8Ki6SZ2ddfK85ENVkMRZ2EdUmczYfD74nVkETMe4oH2CCTzzmXvd7hpKEv4sbzTLqQvArdRRMWDg",
  "key9": "4G1gg5bpwWzhXdkFBSyM4oQ1q9ymDPZqRvCTNP9AEF1ZXsKr3usbEEdgEZSq69eYmQoubFidj5y3nLwLsPp13LoU",
  "key10": "2dqms7oaaoihdRoWsuH9vZNopfiNfhyAWBMUjfTaKYg6RbrkMSzt644VqDosszG1AgeuLoEDJLSHfz6sDjQnqBum",
  "key11": "4jVQ7GjZ6doKrmLCH4ithFDxZaFoHiWqYWDBSXx1TA9GoGgvuJ7nHVR6qnMj3kLNFrEkrzncxTw7HG4R9N5tkzQR",
  "key12": "xEnmMHAQc2hVhxTfvehWB3jVvpga2vrmAdcYsqwaEPx9Pw121uRFx1Mm2mdPTvFRRbgE6yDXPNcUEsoVj3pPo3b",
  "key13": "Ed2FNXPQ3Etksr9KM5J1jcUA5X9W33EdAaFdHdUa5RA6hngNaihNiaadXgEu6WKSDNkZc6s42wvVdCs8GSYejQb",
  "key14": "2jjXZPhUtfKR3KWrM8wjjLp5Xr5CMY6puf5xxZSfos7RwYKSYhVw8HfEvphApBGrDzaqoSLczBUjuktY1ka8jfjg",
  "key15": "5ytxRNyikiVcCwWeuDEh1CV7cncRa27u6pNSFbBjHrvGApCauz497SAvL5d9k44ttTux8yKUKfM91xMR9ws4wY1h",
  "key16": "5UFz5JjGczHZg9U9PSR2d8E916RpLdcbimBvyL4ad1Q9Gcb5kQ6fhoEi3v6YG2xNQE9cq2wzEuEcwjhYKaE7opTg",
  "key17": "2EcS46Cp3pf7R9wf9BXNKRg81zktPgk2vYn2FKDRvSH9MWPfRnLSjdJkuoYVDd3cViaoSHC9z3hBtkLpk6uKZfD1",
  "key18": "5uwfAhmfRg1BjbFkGm4rNh5fac99BGKdqo361x1YUjkdZagZZAfUWVDsjMP5m47my8bijHMxwiCFZRAkfPzFrBV5",
  "key19": "4a4aiYEHksaYsD8gpoXkE91QeVxkKQmJmYCnYur1oruMN2jcDePG7q1RvZXc8Qo59iBBj8FmgdyjZuusPKzD5sTx",
  "key20": "5P4QVpyej4xAoivNHM65pJA2UWX8g1inAmj4DkcWutd3GBknYumacFeRjKXc8p643X8SVPKXXuq5gVpAURK19vXA",
  "key21": "367Z6MSUvhRvm1CoZCaGH1YY4G3KUoNrsPu6f2iLFRFrRf3E8PcvnJyy1JBPgJKZiJfWEeypTvgczgEkBhGfEYto",
  "key22": "3A7g7cZWB33Yi1EW8cRwH8W8qgJCBnX5w8BUUzWx9hAeUcDLvbDtHS7JG3kxnkhELGGjmetUW1Ur2cTu158ZFhYC",
  "key23": "3ZdrJrwg5iWqdu8ugrVqGVJ3FeTQXTyjXVs8vUR9RMVijDpPdMDKVYK2hHDARHRD2aweCTUPPqM7XbnbprHhuEo4",
  "key24": "4WkThtS4hHi92DN1R3xdi9T6Uv4MPAuRhW7ypaP84Saeh6HHdN1GkzdrqUe4H2vPwyJcg5wnHDZ2pws3f2TdANqB",
  "key25": "5untNy1KPcb6Hx14hMJA4nmVyouDHs2eSbeaiJfaPaJrbTFZ6fJeq9xERnP4x9RkvqPm6rjM9V4HuuzfUqVrqVqW",
  "key26": "3ctR7wZA4WSxBeZHXucGuYvLAg2A3Qi3S5kM6kmsk73s2qPkwgKH1QkjmNvzprfJqPKxcW7xyFyeFUfzFv2mCd5s",
  "key27": "3ZsnTxungiXrrUqYmvb2ndDGuWKNQ8iAKtHE6MypW4vSzjLNCywSdNzo4S3bvZKuV8gC6QMbuXaCKY1pyHwkkwXV",
  "key28": "H54VPZcvWZTV2hXtemhk7KQq3g6JMDpMGQ4UGLcKLx5Ny8ueQfcFJuFE6t2Jo4GTAqLAXrgDkPpnAQuQpwnAKYY",
  "key29": "4ioF27tRePa495zCkyWfLBYiKv9PG1yVYPw4BG27FkbXU7i9MWCHmwKunMqRRB4HfzkRmjxhibSHezkbhZAJiExQ",
  "key30": "4LUS1efWt9soHgRDhTuwmHfLrS9bKypYXJnjgoh9pzr3xpzYANAKktoLr6zAjNX92rnmFE9ojCPG2HmJA12dxyoB",
  "key31": "UFTei6WNo3fwjSFaKFtwdNQ4JGT2nctvHAsUTfFki4vHcwWW2UxYRPcTXzZa3ccFvQ2Ue2e3dfzjo4fmsiiJDMc",
  "key32": "3mr6mgH2FrmjbY4bdmKx5tWk1KDHtjTj65Nmsv73heYucaqNKSx3e5zJhf3wQgj5dDzySHCS2J1pNa3ERQHD7ZSx",
  "key33": "37UXPuG9U9QV2RHWdWhfkp6dPZfoS6gmDTZmByG8G4e4iPRUuLyeSf4HavosVhUACQ9DHNPZpPpMHk3SouDzEeNc",
  "key34": "3rXTsZndjB82ARKvPBb93aeyqafJX7cT3rpsG9ERN8sjEB4d8BzWAh6aCBqe6ajwN9QW2aEcCtafEnwFRAwWvFhi",
  "key35": "4U7P34cpmJs98YM2kJfMUAjyxktA3ZQF3KRjMiz9Y4W6oL74UaYWNrQ9fVYVStkTAGMuoadsgvNfdmqA5GwiMeLQ",
  "key36": "q97atAmctjudNGTPnaNnAaeMGh56XR8Na1wwK2L7rmZQgkZQqwPQU2qJzhRB9G5n46moC9YY1CfeT353eSK3r4a",
  "key37": "1npJQhqXQZF979AQBvWNFwtoHSmfXtw4aAX6UWPMrQZjRx5wxpJ84jdyhWZDmJJEkBP19D1hh4tkTroeo4HxbxG",
  "key38": "fwgfx9ysWisV3NUV5SzQCq92SYy3YPRjKnpHoPmvq1ECUfy6RUxshkCg3EVX3uRLet7ZmtSupEdVuZnAxuniQjy",
  "key39": "5VYPjm8zxURwyGhqo9QEm4iJdaUN2xXTXQuSgFp9GXnSH4pJkiR8DMNSsEbmTH2tCWUzxwv5XDFwm3AyBmbxuV7t",
  "key40": "vyUd64gkvTJ8Hoq9uXTiFfq394mpoJvqBeMUf2ke92XHTGMNH1fyzPNzvCRrdzrRomisvGecejnYhxg8AAf2Wwe",
  "key41": "4t16MXw6udDutEjCsDgbJqi9HASy3R4Est4NkmFJ8eGfhxAruxQ1KggEhhfxnCnCRGP5vxCkJo5vAAYVskfbvfD7",
  "key42": "3nEfn5i9Vj2a2uptgXVyefchwKUBskCaDiDEe3xtbGzRhBXGnsM9ZQrupSn1TLFjVA35pNJ1aaxjpEpXMT6voQGV",
  "key43": "4gEPMPERTP2ubCnjWdTDKdEVLUy2nouXHXgyXWpa9WcYK1FkVeSKiCawbEyiZB299xqwnqr4QMrXq2PT5aajfhJv",
  "key44": "4Zwwdbi5NNg24oQWcP34X8CMwGxVMNPiV58pqCyKZ26TPhDUtrUbvrn67m4kyGprdP8aSokEh2RrvGmXpQ2X7jes",
  "key45": "57TqTtvgta8xeEZShtCCJqDLWXwupuvcsX2GwTKVkQ1iqB6oQWYX9NjvpcSBSpgWQHE9JmLLoKNmVxDCwL5P3nHe",
  "key46": "5xy7aW8ZFgEAEyTjvbxu1Ytwwg21xLPJPSQZ9DrA9LccsELEFYj6NRvKy1r3ZE746Qjzt9e79W9Vp6WQi9VuUvdK",
  "key47": "4R2GX5rR9cqnsaUEYaFTMKwHzzJ2offZrpEN6GRhjRjgzCf8jiUxnq9eTXotztUZgm6FaZs9XEHM3LgHH4guQosd"
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
