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
    "3jz1doRGQEURyHGAH34R3Xm3dauubXQML96vh4Sa2BcarQjeytpef4xY3DY45XLiHGBBceDwCRYdwDrZ1PG9PzSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "524ah1JU2WebHAL3WkULvGnkfjsLUifEXXe9f3REFrpFGKyLM5qhDBm4mr3E3P5pZBmvWAD4hbaa5BSmR1jVVWBZ",
  "key1": "3Zs8x9bWnVjzn8GhGf39mxHY8bWFeHsrxQqzc2z6C3uJFJqmXtjPQpRymaa14uAtkxPDVvaWjA6YkBsXPTKZ1Up5",
  "key2": "4crLYzGoHC2RMy3gCQZBG7pJA7FANM6K6xPvaT48TU5XTBhf3hKCyMLDacMEqnVJzc2pEyfRmKUkeqwKHLnBbehV",
  "key3": "2L6bYEj8YXtQRxTYHtT7wXA18j4LiWij3z2vLKYPjHFJ3qWR46cVfBwZsDHfXzxpViTiiaAGtxGSrj51cAND9bgj",
  "key4": "goznTZZN1kHo7tVTSv1zSjNAzHcKnnFZqNm5SSLc352MCaDiUUuqVXMZaanRjdmBxdiLZK39SvyaNxjGLPoiFPQ",
  "key5": "25FeMv1dUXFLHSxpNcSsLtaZAqbkFbC5JodcJYKTWXshQ7USAveJhR6Zprt9aPv5fbcqCDL74sX7g8VDiE3v52vQ",
  "key6": "2dkUJ6cbt9b1RaHVoP35eckCGwkEqJm4JvbWKxL9yNy4A31nLuuWWa1QamPJ1Qp63peQd4FqL5uCGi9AH5BeK9yw",
  "key7": "33ZwjfPsZJJ838W8eEEtySorEp4LLETv8UJqWmVbgKkoRrNoBZ7Vh5CyEbmT6e9BtDkFxzdBkGURJbNjU1Njdpth",
  "key8": "59vaQyTrg1QrHBZ615YhKCAYHyvmwsATF8dgciCKdDZBrRHSL3Sdz4exADuGh3dX5QEn28Fsg9fBX85Xyp2qe3PJ",
  "key9": "3JrpFAztYjLSoapsFYFY8WMZtxwFNRrYDtiBHMUofphahQVa9tBfBkJPFr98pbgBMcw9EpqD5Xb4Lno4seEVNPWJ",
  "key10": "2mnMquyVEFVMSgumK8bVJXYn5drtdFs9YaNQf1X4jezHtYKHb14nTNkH1AJwzw5eHZEGn19offro7UhLVr74mLQ3",
  "key11": "3GJGabFJqQTKRkvsMi7NPTkRzumQ4bEMiRNv2RRfcg6LiN47RcwvQU1gQHWWuhqMjGfsEjAqBzc49jCxPVMPsyhW",
  "key12": "XBraFbPSddZfUx1bwgAJ4D5THaFSvK46MAUG3Anr5gcEcKaV9ZxXBdjGkQVtgg9g6fn6Kq6m34nyerBk6VBPbdP",
  "key13": "39VM5rX4ye7N5jHunBPbQDmgZAKJMW7xwEoTwf1chNCTzsUNyiStVbrSycM2a741BGEhVL7KV4n4HPY3t5tm2zri",
  "key14": "hb32VjXsVYVMmTNz4TSoH6VxDte4vz1TBBL3FxxV9r47WNwtWbzCX26ubcVJz83z2BCzt3Gbk8xUMPWBQ2iyYzH",
  "key15": "2ReKYvFCP254P74qrm6w4QNPzdjGruze1cMxKpmPuCW9FxqGBue3X5bLDazZkVuxQb7XaiNfHiEH5HFXUgwdvhjM",
  "key16": "65PimcjuasTi6kr7MniU4cpQroWe4j6Rv8Aqfbmvr9DQAVMZsLRGSTuF99UNJkNpoDNowd8W4Ki6mx84JimoQfG4",
  "key17": "3NnKXqZpsDBe35494chMFnqY5Wj8GVBe5PdVcLBiAfSepYa7pMZfaTwaNeanoT4bobcYSrqNw32DMXhz5xV55iAT",
  "key18": "3koqBWBfTB3hddfM8569r9tfcfUtgK7FXzQW8EdXMtQxvFeDuLmPqtvxYP94vPwtM8FeuQYePvQzJiSkobj28YS1",
  "key19": "2bgR1XNvpBW6WKa3duogmYtS9aZMRyn8QtdbRGeAWS2BVjAXPdhcgLULcNhNTrRd7VnwHvjpqQZo8FZkwHDZBiZr",
  "key20": "A4bmecMtciGmXEp8QAVLZwQnf3MvWMJjnvGBuPipvc2gA8zkkF6zqvAZB38ArboeAE39bUc1J8aEBaWCeNecf7t",
  "key21": "67WyN6X6cns6eVGkZtnVD1xdNEdtr8sb8vfeJJYarWx75msF2X99en4qJmf5cGEx7qqe2DeLshvQWiJKoZRQwBqv",
  "key22": "4wasGEiV8jcQ7QxtsE42vbCGfGqSGaCGJkJGu66i4akBARX2DHg2bn6jUSHtLgDj5Rjfg6c3x8XowpshTdHawJTZ",
  "key23": "5YH9ZGYCqfpbhgN2ME9jp4BHatFZTYC9SdBZwwefQ9DSSQayLrga6K6BN5i8EFA4MBYgN3Zg4chUzVdA7EruXHAA",
  "key24": "5PijpVtUB3uwY3qtXhBK9ffXEn4AF2xcdBJvWdGd2i7wCarCxWpa6iFDrsCXyr4nLNJVaNJafNQJva5FGbsyY4fj",
  "key25": "23vi6HSe7kL5Doo8ut61zfVsDT3g4XXQqoW7Hj6P3yTSXAeFJ5H1XsMdYjfngYArmhkVapPkjVHegMtr2tr1FuYD",
  "key26": "ZBxpW4byuuSk1EupUPvZsbr7yBNvNnsyVq2eH9XNMhwKRFHeR3btSXRDaHtTbYj6zYqFo2tVk6PcMjZtdPCRGvD",
  "key27": "5QejN7gMAaccowDNhrngNL2S3sAiW4tux7N9YYvqXVR3rHYxpx3ik7CHYn1zJdwtKh5s2JqXAqgpKFeK4WrHLcjk",
  "key28": "3MUy13Hu6eDkmAqMeALNpS5JdseacMEvcPsUrsevMp3L4R5zxMPQPHSXBQH5S7U2Hz7ve5xus4bWowq94nuEfB5",
  "key29": "1gfC9zkaK3p2DfM1363CCDDcXJnkfaE8QnEmJmwVhGZWpPMiuMLYSMbeQ76GapuFnV5qDaYnpJdYRSUVAteqhyh",
  "key30": "25Tk5PTMXE6drZceVkZjqoRsTHkn2xGzbCNr7SePSqxdgkxkE7Mps6qEvczJvEzNaGdMQ4AsQpkVR776q7iDsvZn",
  "key31": "4NRp816bNZvmYQbTjB7jg3xHwNZQM8N6ZoPkcjs2oRfW2UVoUwvaK9S5srrKkir59tDQvuNoh9fNhP5eQJpL1Akz",
  "key32": "5Md9ienYWJ4Tiiavwc8Hth4X9Ds57qYqxygdY94NhEbF9mTL7K6dms15P16ztAPVcZHNzrnUm3ZT8ZXiPAD1zC59",
  "key33": "3b6stEPdwY3mfYqtcWqkJTshF8g4yashEzS4FnVSz1t6Xj1iXMb9e5KbqMeU6xP2PiJLEf1YUMfScqjppCKFGys4",
  "key34": "2LhYtvibZC46CYqfK2kLTMFcTdYmSLGkNmTFGMFxKui1RjnyJC8rx3yc1vHc8crcWWtzBg1GSHHtk8QyHkJ8EwBY",
  "key35": "51g1p1eQ2jZSonBHsFeuzjeqrueNVombDuh3QKAUVz47brbzJVkQE8SJy5wP3kLYjiaY4nLF3nVXkVNRJzECVJ79",
  "key36": "5RMN4gN2Sn7wgXSgsvtrHMu1yzNzxxfYuPMdJCMBzuMkwCTmBctHRmek8mQcLeQFM8M8W4YW8yCSur3Kkbr9Zcus",
  "key37": "kH6eRHg7HvjCWAf8cMhGDDYbaamfwxorFg6vhZYfGYCcpYxPjRS4CcQJjhMT4R8Yi4a8rekoQQTd8dht4dFWvr5",
  "key38": "5A8G7srmkHfFmHTn8ifZbieLMnnzYo7jDiiABXKAEsKvnqPAmaEHSQX8cBzmnRhk4RwjjenQAKkeRx2RPqjtR5y5",
  "key39": "5MztAzweLRytsKs2w7dqhVVdeA5fFtLNr8EWaA8jTpNUP34G3u8HChEb8v7TuMCWTX3sNTEmu44L7JVMkqY2ahwF",
  "key40": "3YrLJiWmhLVJRGvzCt6K1tPdT7Zsi2DzqrPYQzUmMW8RyXzyfiEbCpvDMnoJ8s8esY3HYXX5CRsWJV7HyE7GhwqA",
  "key41": "2JiiF6LctMYXiLG2vZkDU5kNL1a2NteF94W57CqMgST7Xv9fp5VquZkHM2HZofHXEqqyWyPnVxyVNEAVYAbpxGsy",
  "key42": "RHMPNTgQornRHb7PtskL4cS7dUaMxXTTaEvRDJxb9WszCbGd8NvzHszvsGnnAE54F4phnSwCZ1CwzjVhG9j7gNe",
  "key43": "2LxZEinrPC2UMQ1QqdyrEbDVGGZT23nN8x7rGgYvSYKayQCHibnAb95gPvbQVttyTTiqGiqvYr4wxunZvLZ2YPj1",
  "key44": "3Wax4dE8dU3Sphh8UAZPviKk9sgU6dtaKEQGXrTrtvnFN8BQiyGy4msDRbnHyrzvQyY2K5AvsV3MQ4mToQzrQqL4",
  "key45": "3vrYXsFiwvgJCyf1EzW2kwzB3GfVuHTCxVhtd8PgfaswR1ee9b1MhLL1MqCt9ZgQd258RdgdgC7VoiUk2KmBKSY",
  "key46": "634caRFthWgXXguc2SNXYcqBBrEs72rpgu5x5DBx7kREqWk5bWphZKz679on1aamq7ZL2KfwhFUG8QCtDdMAsDSD"
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
