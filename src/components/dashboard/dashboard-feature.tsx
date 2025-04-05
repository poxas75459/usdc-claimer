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
    "u8XMtQdAqTtR1Hd6pdr1smc4WMdWZAC66Ga6H8mxiXvHkfFkQZP8uKqVkcnPMCehc9DiHZomGJ65HyS2sagQrER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387hH9oBTCUaG8YigtVDrBS6zCvnUAtGxrkctc3bFi1X8DBMLByGyNABmwARiXqgppKZ2KXX8Jox7v3p4XyEwuMD",
  "key1": "hqFPqg3F2XTXVmDeumWqFCQqN6CQoJR5tQ8CpjEznx7gDzqdyCNbga8D6bdoFmYS7GXb6mt1gsejnZVvFhvtJWx",
  "key2": "5ENpwrNQkg2Tw4i8hWUEyiNat28AUoiyWUu5EiGhhyF1cxdi2TgN3einjYBVMn6Cu1Ya7rvVc4J1d4A8TfPqVYYF",
  "key3": "45zpVueuXVtjnR3YXozxqMnLfsnPv37bc8iN34CxqccSuq4AXTVg5NRQL6a5DkDceoGJjkUVA7fpBeaArTvPRNUH",
  "key4": "3wWbTVpypjzdinUK5Z6kNcQbJAaET3CEdcKj5PAgZJSu1QF2BJJb5WB6snRg1Bie97UTSaRGAD9NrkTKH44DeSRx",
  "key5": "5Kn2MXmwCoZ5pe13DcogveeJfEvw82AUbGFdcZSCaRLA5RQTfsPDsJMfQNy1wvZ1yy8TPP7ciqonQt82C6mB16Nt",
  "key6": "2ifHgHEubLQgo8Zr8KpHqNxCwAeu5gg3oPMYPFG1J7kpg9KmhbK2oFPM7LkSxeGsfsQBtVK1RMxnJuFFxMFbCaUU",
  "key7": "398vQQiscwd32zcf8wj8oSbbcYPSERx3wP57zgZgTzwJbgyVLBu4oBWFQHxnMPvyxVz4x3LjKVUsztAiomYnDu1K",
  "key8": "4EFL7mbnAX2CPmAiKo2V7emYWDbpQyFAse8UDhjR4xiQuei15PGzfbQ94cGqpsrfnLDSizx6DNZEJFDiwwBmtMhZ",
  "key9": "24pdy8ULEZGBv5Hc1GeCWCdxQRMUCCUxuKbmgAD4wzse1EizDd5Q6BD5UThjMbWF526nsJndSJHjizvuGaB9xwnJ",
  "key10": "4ong9iPZtqPRuH7WJyBnaiWQSPB3jjVukN23p78nqch4Wh5fqbqbT4vt8MaYCwmjo7xpngX12pUyWwjUtt1Qp9Dp",
  "key11": "5gePSwHiYuSgALZ4xKmFvM2KbHXRsJgAsoEqgJNx4BLzUQwSBDJcwjACFgGsJhSDKrcAuGFVehcAKMiY9j1VfDEd",
  "key12": "4cEK6TXfhuurVwUqWt6Y6eCnkz3Y5z9SQ8n9jFLLLhM2VyEWLKgQzRLQzQSGR2iRek3ZHT8g4x5Qa8igf9Zaq7cg",
  "key13": "5pdCsT9mD9xYdabaheHGfaeUKaiTCYtsCJp7XbusCLWtmLDcyBDcToakWu9mowuLah72uuWZWQ7ooVGBMqL3hCYp",
  "key14": "54RCZGXzKbYmBZdc99XYPsoE8kfcMWSFg12mjLA6kTv6Y3Xvu6tJED7SkGegyuiKZvPk98CA8EHRKkhhd7Diep1m",
  "key15": "39rghEk3gWPqyJTz4DW4dcj6WQEdodZ8q2ukjci3DgQjCNhSZGimecG3PUTvtWz65GaXrNUP142knU2UNfyYpFEJ",
  "key16": "5iHKgicoHStpLP4jPZiciAG5L4QqTKfsNQcMabzv1ife2197gYeHVvcW41T3CfRBBeqk4hH6yKsea5BqS4aw9Hkr",
  "key17": "u4LqQPz6xMA5AGbEFB5wvxM2ua8DpTSJeMXcC9NMU9nS9UXi2uXtGPfgusRAgFXDEYdTe2Jy6NMh9rxSG5ZpDGU",
  "key18": "BZmucsT1wXNCNFugZPcjZQVAdLTiCZskieSKX1qssGDRdX2K4MyARpGgQo1Ear5NnYz3XjsrpTesPYdhKDNtm8q",
  "key19": "2ySypxvAQWSPpEZNWnz3bhUJaUQAZG1phdE2FXRjmcVozXYm7t1CEAQW2EEdWxK4skbpRCZPyw6kHFtFZ7i2eSpx",
  "key20": "332ZQQhrsmZCeuoKB2KHuvawJ3u2NargsxCJtc8BLnQETCsiicyP73i3SgszXCEinRZkEWex96MztR9GUCvP6j1L",
  "key21": "3QgnaUMwHxyBtM6ugqtq77WtYtKXC1jRmrmDs4qYW6bAhrH2XcobhiQCLu9HYV4jarKakj8cJqWkouHogrYadDe6",
  "key22": "5Xbf66XFX31vT6UanPpgJRLbBvByFGRGF6DNCBx6UdjwB9BYJEQTg4v8Vyfziixw4UUe1uQyLvcRmcirPet23A66",
  "key23": "42FvXC9N6ithizvYJeodf51pqFmzygHvQgcdEv8EH7uyKDHEVFNH2TMDmLjHG2NesqEjDNaunDBivdbCQuaofrgp",
  "key24": "5Rs8B7qDosXTAaWPRjkXC2yyj45K47HsiDjFJXWCcFgYQAihmPkw6FPwU8bcTDJbmJbJCuNdhQ8PTxiiF7Gja2Tv",
  "key25": "3f27BX5QcbqDSYcccMhLDbfXyHiv68yFdR7tgoMeNwcEb9ahgGQUp7L5t9tZG8Rn2d4NuVWMKtixxJ7vxEa19rf2",
  "key26": "49iVYkWsV9qp7Q1YjXPbKgq9uwKrtizBY8BwpWy1uarzDCctoqtDei9YN2nFQ82yTX5JibXzYkJkpDstuKGEE3bQ",
  "key27": "5YYKhLmMvA2MynJr6qteyyjFacFeouvbNQCKukbzwtqvW3jfBQ1nfTVzKLRycLbqToUfdpK8MB8ypg7EqsrJZLDY",
  "key28": "2d65eyvHroqsyfDQGmeUtGiawWuRAzQ1DJMViLkTnJuzb3nNdLjveAQ5TNwPv3knmAg4dURWCzBnC5o8LF5P5Lsk",
  "key29": "5iLyNrxWEWJPGt94oXMHVgLveAQUWaz4QujQXvm4dDFdRmXQoHvECAHAZYaEoLinQ3gwGjwFBB94BK5oSAvdZJJx",
  "key30": "5YWkfRhGMciqRKpmweNne8sTRPP6PLVyFTXv5dGG2EyPvPzBFmyWPt1bbVPKfGfehfGLP8XrrsgTqtJx7JG7xbsH",
  "key31": "2MrBpYsR2AN6nX9i43qvGGmq4U9jJ8nMDMTqxwuxvsphsQRsDPguhisNon55vE15o1eMbeq9guZrtBhRVT1DSNbS",
  "key32": "4ynanrdRC39juwW63L88wQNCGVS5pMscK3JVHRq5oS8cP818orKG4EzQUYfc5zK8Tprr6bE7etp7wbtqYLCv3gyh",
  "key33": "319FJz4xjXLYikgXtK4cyLRi3D4pFoUFBM7PJ8UPNVsJ9gqgc45XNnJecGXgAhX8oTCyVpTo3EiLJMpdALy2A1KT",
  "key34": "31s6dAvakau9kMm3XkkZBkuAiJi1mC84WVdVLhB8xhr1ViYg9N38AQ2WnFLBm87PVu5j9bALb6DYX8vyqErncNPn",
  "key35": "5UxyzrJLQm21CjpyXWbd6f4Pqsu2j8enT5xvnCGoWbNDDvca79bwUHqiEhFm84oH8sxspY3m1VLywthRX8tCs92x",
  "key36": "4tKjKdedeCYebuwMqo8Zxg2bqBfLSrsboN5y5tkzL5kbB2JXdf7KxxqBeEUYFtxUmEr7k6soH7YQcpyKMNgwtTsP",
  "key37": "28QEF42oQi2KG7F5jz9DVAbeYXtRzZRGCE4ez22NGbaqaPQ1WZiKDSvWJCW9QfRg4WXiVEXTATbGkcUUBU5EfmiM",
  "key38": "3h8cFkJRuY6CcJn5TPJDtQhtbyowHKVwLiWhwEnkqwSd34L4Q6yWLgESrXUvAx3QX6Vynq9BzNDLGtvK6EjkqxAQ",
  "key39": "62FrdH2CfibpDahq8F5WZ8i6X7fLUvzLPgL7EVTuzXPcSx4ZodGvvEbRPefR3cy6VDcHWtNmbzZx8SPeFxZhshtB",
  "key40": "5Qeihz2z9VSrbK13nimUgwt8AgV3WyBJQwqZRpjDLFLutzu2rbxs4FRoMGxwPksYsJGhPy6zsguhSJPYCac3Q5Jn",
  "key41": "51wG9EWQE53QeLvxSLH6Dd9erTbfC4r6sHgRAmbqB18VkMeA6yNzB4f66JGnmypURFdTrar7Qsp3WgzRxA1stYAK",
  "key42": "nQD21yxjb5yxF3HrfE5u6sRdrxZ3kjYjVzTTkvxYB6xww2BJahAnneLYvR1WScX4FuaurDB6X4nUn56GLb2qUHX",
  "key43": "9HQRWoGV2PvC4JDGCtY1vBF3hyD3wcbdGKGmFdLrF8FoV1LocjwxHQAW8QgaApQxi8YVsKUvxuu3gJBxjmJ9HMW",
  "key44": "3st6rrNgZT8pUAqPf4ztiqrEUwmCKntpHL23UpAo7bVDN8dEAkVzy3tFFa1LQi6kBzcuPkTefJDPJtn5znMzixq"
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
