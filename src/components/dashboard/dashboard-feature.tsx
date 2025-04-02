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
    "HsQpuVfm5Ktk5ZEG8MwMXdthx3YosLyMCpCGmepFekwgVndQP3hNyn8dvc5y9f2C4X5PSj8pFCE4JVpT2VZ93Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzZDi9FHJsi2FEPjA5JuaiH5DVHQFe1SzyQLze7BZX3y2FsX4gGMJmZykkVQrdhMS4AmYyXqVF1B8e5hSLgfpmf",
  "key1": "3UyzAyom922fBmiTqC2CAdyXZNdoYifC6RGLVFNK6Cxm1dSiiGVgD6YJxpRBHSWDUtYiJ74ZnjPvH1B6x2tpbD22",
  "key2": "4cJWR8dhiUyWcc5X1hdz5XK4QZ9CgLS16dBK6mLK3F8xPDkbC3QXcd2DKMrUDj5T79g2uF6k1rdRopgSj1J6xmiy",
  "key3": "2nfYrn5k33Y8VJhSL4B8nVxqPYJhgyZnXxBmbkGPpyyc6RZTNRnJoazY4HzuzfxWUHRfXUCj5PxTKsm6zySQco9J",
  "key4": "3g4Tf3cxrEUe4yGnd6hsZKLYsuzYMgPJPygtFZsc5khdhxd3sAnHoLQCgYwCxztZn95Wpeac2wMWvKcLwvQsPxuN",
  "key5": "2EfrhxVmxdF2S3VyyC7oTSjBE1deMgsir6SndW2PTdgDRyCADBn3Hywyx7rEP4biaBsGawQFMjA7bdRq2TKQiz4n",
  "key6": "3qF7bzhTmijC62PmXzfYnc1DM1hvaeg7NJoHDa8qX3i7eZqe8p8TUxVErnn66T8YZt5kku45ZCygrGSJZDgCCNhL",
  "key7": "3Zo94qqbnbhNQ6KAwzjAvHt36eXdoSdzM6fZQdMxW5F9sY8KZDX8jt3X1i5yAr8ULYJdQrVtqCwz5djF16hw9qBr",
  "key8": "43BLp6CCzz2XiWHzSSNReu2EsE8ccpw4uShiYYcJcCbP4BUxAuEX55e7jHd75TQuMEcgmDSWThiD2AupZvWeUaPS",
  "key9": "37aFepwLaRGsB6cLxpYA1W5vP1shDxP9qKm8eEGhJwpXpsviqVfyjR5YmvxMAQSuGXBimvFdaeHz3WT76HrUHHFz",
  "key10": "3wyutw8DoQpF9fP7tmpfEqawo12ouzHjRE486DmQZy1ZEbNszbe9e65SBd64zoBjvYYafNmHWfoeEBWYETWNM24P",
  "key11": "4mQ9DgpLkbGs3eHHPMwKzEMiKpGfAounk7LC6cWfjm9GXUVVfGH19PCkr37QkhFCDN2qTrroXFxDWtDQnywRCQbx",
  "key12": "53yTE1uQUWo7BXNPjjbVCHwwG8A8cgp9Wx4KUyRyTAQLWPWTCBd6NXh7mGSWrrLec63wb1bpXm6RENA1edRKqYyx",
  "key13": "4qm5ostXNFaXwV7P9mSoxtSNFGoXpgLzvLqpCbDHW6zsEz1nibPnGhaS9pUp7FnqWsy9wjghnde4BNRky1qEgLdt",
  "key14": "3mSXxobrb2L7KjUvuaiDMhEiLgFRyjNGCRvX1WyT64ziYhUPqTS1Hmu47gpssapHhr1YnaSNkNxRZRscb6RFSR8J",
  "key15": "4XRCtrp4EjUPNSUc57gUodAnJxQVQQQeUkPMVB2bxzVUj6rkDQ7eQjqLC9xaPiAY46F7ytK6yyNBTPVYdfRdLLyM",
  "key16": "4oRL2yvR9pJWpJwwEDYMEbtjwS54gEYLHCKu9JX7NeVJXYuQEepNyQTacVUsjemQUkP6io6pP37JHohX6nJxEVQ4",
  "key17": "4drtE89MqYFt6GpLxmZzNVvPpgrU5K9RXPWCK4JK7PqX7ngdnw6LDKHTvcANgtAknkkNKRbkPrGiadjgLXusZisY",
  "key18": "XXGDYPnjjAL39XKtarBdZ4j9MogdveTwsBgg9b7MaUJtVgJ8mqZGgKNDvRJiwtGXJtaddKH31QgNNAqrPicDWpy",
  "key19": "3f8C63gz1sVuhT17AQf5JgfcUZCV3usnpc4fzCy1ipvFMt52kR1VRXWibZ4bhj8KNb8xrHqLYa35EKLdnMjfGHPG",
  "key20": "5DpDLXJ4dqsybw6LC65fvmRsJVdZSS66twSXT69KEGk9rveLMY2VWzmWsXc6LMJS9z1d3wt41nLt6pQKk7Mcky8J",
  "key21": "2tXTcxyJHGiaktYZU3W7eTj5Jx3mZYDH6erCouvq15wR54RzGheYFMFxWisLymuKT4hBwbG2gL1V2fY8LNzRTfar",
  "key22": "2JddfGGG8dnBeJ98XrvPEpuvEYmL6wryvr36UYa7bMkZNySoiEZhhRW7wQYHWbNkSJF86Zc6dHi6NYLKoRt43e6n",
  "key23": "kbjQGmbYHFfYquskbDyBKprne9w23fsgXqXsFqKmdyHWvrGymZtfchG8jfpG4UU3bLmqxSQ56cWsmDYVdYFNfJv",
  "key24": "3WbdG4izpyAtdNR7awSXs7Bnj6va6C85CHytubAr1tQq2Yx17ywEjb7844Qho7VUeGVvTaHKSYt226v9DJzCWiTj",
  "key25": "3NbKKMSp3AQH5BRRWkHVwLXAWk3QZ8PNvKFcqfcgbtoX9cn6NCfqhHW7yYmjqQnuxo2Po4a1zgQ72iBftq4P5WMh",
  "key26": "5vyy3dkt1XwukAmJ9H9xJF2rq7FeEH79Pb5qmW8bvF1oMVNc9ZydXJbPRTgcZhegjsn8YvS6MVA2ho4rgxjr5G5U",
  "key27": "3As9JFktn8ngvdm87V98c7ogzNypWufhWe6Vh94GAwjxAVxqb119kvZvZcAbpG4wfUPg7YsicKDQoJ59B1RBe8sT",
  "key28": "5s8d4saRhuXxJspmkBfUrShRGANcW3S66dd6ejeCnsUuiHVapJ4tmU2W4vDkr4JbrZrvLwLuBiU3LCTuuKkJ8LJA",
  "key29": "3N3p5A5AWtoPFXZQXy9bx9S2NpWSg1CnRYKtZfi874k7PQ3eGzYUQoiEX9uxsTdk9xiWThGnjzFaABpUBkxSYzLS",
  "key30": "3EcFqjmdnXKFmpGxvHW5LtZtaBURNabT6bWfz5GZmePKWD1yhxHhZBJ8rahL6sXvKsT4VYTjVpjzVUWJ336jYuQ8",
  "key31": "Dv3fhr6K4qtiGueCPRRGgKgVbsSpA3vXrSDDSu6PuRYQ7hsQUFSVhWHmMvjPUoEmKJM54kUiXsYMfPX3BxPRJG1",
  "key32": "uCt9Exfsh6DGpZ63QYXgEi4qUaez91FdVHbUUauk2pYwwgEr5sXhYjYXaKGHvkvu5DEcMxPaZ3iGrbDJrDXdhK7",
  "key33": "3DjqG4eSdr6kN2P7kj54axBmgxj5Df6WsBRaLWy6Sqoiz6nQUAUXmhH87PHFe7GrJpBcwfsvFWwKiGA5MdmxLfuH",
  "key34": "5oQFj2J4LqwNNs7U76pSbK9KWtQ2fuByHjsdm4H6ojeVYuHVycr1SKHqSvbhfX3WmWHLXVjogic6cHbWhsQfHuuk",
  "key35": "RB4hDzKB15Fiayaw12qsAtEzmBHfEcrz1aN5nBa9kMBHYtoHe8edA3YV7nd4WfcSskVDhiBL9eDs6G7KoJbb24s"
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
