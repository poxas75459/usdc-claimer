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
    "4UYNDr9VMxuF6c5XMPttWQaDNmUYt9ioN9YA4nohCNjMBGeju8kz4PX4zMe4VMsuaRpbjcjThiZ7LLqN8sWs3K3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjtNK6JKrCsTNLanCzG2e4ttpgwu5EGJrro9NvoZYd4Fbn1AhfUz54s3wKPXYsrTaMjbj83sfACQ4B3JxPhDzs3",
  "key1": "3o7hM9HsfPXfKvCNCKejD9ErjkPmMKUcfWoEXK6Uo8waya2N6XynUrxDYMR3E7kvC1xSh7nDgvst5GNqWQtYnckX",
  "key2": "oSVn9fuA2kvktz2gZyCrR6iwYUxvotFe8Bda8oq2htu9F9N41Q774JDAGw9gP41WZiQXu5Ud6bGCvcjwaH79gd5",
  "key3": "4SMCvGp97K1N73t9MznB4ML63gxwogCfiX5ryPj654f7R8H9JeqEaRNufiJsJVqR74JvgmS9oc2c64JuTcJYR8ig",
  "key4": "hM1hkWCAA2Xcwy4ji9n5uBuCyRw8KCYG1V1xRzykp4P5iEkDHeLbgdwV4mZyZNbTDUJuxxmHZoiGxv5itg889KN",
  "key5": "66xwnnF5m5zxJkphBFemmPiwMAYAvggymQtUKMCtdC8pKaDSJUhWgPtgjKHJ1kv6VhuN8qSpcMxBkFc5XfQSSifK",
  "key6": "5uzMfDcMAgHSYY6cRXYAcZmnCx2UvLaMmwa7ZgAmM1HHT4MuugU3faZ5EUmaTnqjNAcuv3b8rZvrJ5po1ozEPagW",
  "key7": "2jtCNwCvWxrS2aeqaLhQw2wMwVUST2vhk7FxqWKEyFqFKkGE3kZTEckAHDon5QEfPMhRcJdDM94GtSBHyfPzQd24",
  "key8": "2qjgSGSWrQsqsrWX6ou4YLGpxkGzj3seMN1EvJzU2LVgjeor4qwBHAyJgZ5Miu7EPFqbaGw7GdWTD6yChbGPc6rB",
  "key9": "dkBnDhiqnk6gsqM2k1uCsvWV76b7k8EhTwD5fGFcQhPQc6aicrVcU8D7FfSwVwGXDkcW1kNBQXnB9rvHT5HCC92",
  "key10": "3x8mTs3piJjCiSCmqnEpXFAC6qwWSm8Kf1yoT7Jz5Z6hrZJV664ZPNPNjbmCidAoYca9rQfVRhbjE5ek54ijxU4q",
  "key11": "2QBsKeyaBcGUmaAWx3bcyLfwdkSCDwnqtcwGuDKDNWjYC9nGhwVJSZgE4fJ7qdcKkXTz6nVyk1nMMdrio8Eihyfw",
  "key12": "2EeaY83zRzJV6MqvwZeNRHcPnoKo3d8bEiEyswcCvoikGYjAiMiUSaa4UvaeGPZwejzoZ77aEcyqcgqFYC4NEbhr",
  "key13": "2ke8emAHxW6VgM7STfRSyekePYgpBEXekJhFYU4VTq4hq6N7bXQ2Zpt6rxgiEKt8tBmpYXY67RufEv7joaXbkwaV",
  "key14": "6Jq4bu4zSKF7KhXQuknpUVASWuvZmMs2GuTPkmYYVx7AgwqqWbqKHdnKNsvPw1QvGfDKusnyhXTU29oRSXbYzDS",
  "key15": "33HtY9EuQyanJbFCb5gtGip4VJkkaGMh9De936QW36QyqQihx2EdpAhMAUDchwRGwx5jdCVo1r19ThvbU9kibZ3G",
  "key16": "3LCeTEpnkWLbxA1TrTxebrahCpzi3AMEuLBCbLMsJ1fiAL3CnBUjAgHQbrasb8ieJubBUq44nL7YVQ14JDcLs9Lb",
  "key17": "53PhPStq52EQWpVU9L6PSUQBKVBDM92txRPEkw7M29JUVzanCz7skNpUbGkm3EA79hbHjH6paxs1ZSCdhzs9M1hn",
  "key18": "5YYdPmHFJTQg6fNFs8QCx4C5ei36h9hLJt2tLpZeeMBcuoH3LBdGAxnfdhtAjDS2XvSHeyBjVFSuv7syjDWSBZ7k",
  "key19": "23SDtNasHNmpLwo47kNFgFM3k2ECB5BmhMANzm7yW5knJ5yoT4ecXnLVUtE3pVtLqiaTGZzrhqrqPPpjmysoAu6v",
  "key20": "3jWTsZB6Pm5fC1GtQKpRuZekYrzcWeHeQyyKBAhVAMYfQ94uYvKG3BKqVWsKAGzcoP5ucKvusmm3sTBAd9bgXNxR",
  "key21": "3npANSB6RGAyXHVf19AAHW1nmXzZ6tA6zhvFH1JVcquTz4iyih4BAZsH1rpEVzgZwhicbAAqpoR5zdHjuaAKKDyC",
  "key22": "2ftmT7RF3TGFr5cK4UuXovourQFtsv4kaUbURhsfKppHWgEbBQwTUYWcjef1M3qZbnZFTA8UDPeSMxfnEriLyNrw",
  "key23": "3rifjtFsvsaL48hEx3Zg1H8AviY1wupmQPLXQtRfoygfkFLLxCr8v9njABtoWhqrf2rGwvEejyhS9mkKPYyJ9g1Y",
  "key24": "3imF69SYAoqe687LbJuaMWx94BZuVb78KFEc2bPH4ZPvyUF1rNgEzfLTpu5RTsfPRpFRF3Vj7JWvuCmvcs4rPNmo",
  "key25": "KG5PXSoye3WMpzu1PyMkR457jsNEJtxLHaSoVP8EkDmh3nYHMJZWoW4rS8K3mXD4qutmSusadbXgoSP7qeFEp5s",
  "key26": "2Egv6qkJLb5nxwf2Nr4PPbJ7SMp8goaBG33VjscJmsYtvnZGMWxZJaM1ujxxBrL51SrMk5oKFZwRnxkwQkwrN2Fo",
  "key27": "3x5QS93hSQWcFBoCrBQEf6HjezeZJhFAyCwv4KeuFxELqd29xmT9Vuz7BPSUr8QryRYmPv92n3Q6jtQJJU5HWnoM",
  "key28": "3KUFqQFFtVwBoWk7NhdPRiZF9RvhxDp4kJ1vYuHUmJAovqaLDF734bQpjBrAQNHwdXa8MqGdLBnJau4JZ7TvP98g",
  "key29": "5CQi7KaTwpMkE8HCnZ1vY7DtEuiskBfopmSFtFLDUh9QvVHZsDPR9r92yTqfR9BGtSYCLuq5mTdkcxMbkBCPVSpG",
  "key30": "2kyp8DLERQ6W5WigrzuLxqpr1NnSs8Mrgh6hBPJxwoXgKXQiut5tBozi2Wab1SjKa811LyVedhhd1bdtGs7SVquV",
  "key31": "2F1UAyA7zVmeMJVjPHBdLDhU6shn9esaWJn6yhPremLSXc2BNZWjbaHJgPQ2JUiZezdvR5s1nh8r5a2yw7uVMMSi",
  "key32": "31qCKadHP4LuJGFskyTjXes82JTNxqPJSfEdnVcnjyXDzxtYrnYRjk5xaax96X3qSynHnA8HoKDwR6qwg5uPzufP",
  "key33": "ZsAARXYCqNDvgce4DDf4gpjAwNiLqWafQEDoPnc1TqtBgVZdox9bTwpk4bRZogUUQG4noZeD73ejZUsdV6giU1X",
  "key34": "3EjW4zxiqR5maay39w3vJ19jx1A2xcBp99C7bvE2UN8cBJt36zBJ5kJ8pFG9NnTSh89p83Y5nAU5Yz9BXnrc1HDB",
  "key35": "4iwByE9Ck6tg8mFY8HBqpsx4rifW9AMK4vkRZCJavjSjTZfmGMoYktVRQVD2hCPJFKHBFMC8pA3z39WQAmnemGft",
  "key36": "2RmVFA9F88yb7Dz4CRgeqhEe5eKvwftZgLwNxM7ySNR97RSUc5DMqPHU7RWw1DS6EciPY8wwDq4fpAhXBRoAeedg",
  "key37": "4jFghRooTsHBDqAhKkZWKsYrn6LWasrutEzLcobtpCq55Moci34n4yYusF5mYHytbVvAm5QFNpyQNtKNo5YNShxf",
  "key38": "4nKrPGmhaURrS16SyTTAexnBGRNuJYWGYjbKXbHpydBNM3k6sUnBdNEznGN6rStkb3PvHG38cFUsG19ymo89Uk8Q",
  "key39": "2uxuGXor87iNWB9ezBxibZ7wopzbE1X4e7jkJDWL4nWnAsUBap3Dr25RrHZtZJQ6cehPmiRH3tVJQhUrvGbBURFc",
  "key40": "4TEzRFiHQnzCXMmnsLNw1PmS5BF5Ypg4RwjSZXD4ru3WQkcr6N2QdMUR2u4MBzrMdLb2tPeMc1h8HTrvMF4oMPdm",
  "key41": "5BtTSQeoxhJG5BXtGWnWeqD4TPgxJannR6AnjgtSARnwAUWqjML7hCeNqQqwJ3PweXWNoT2FwKfaSi8QCTDsjmbt",
  "key42": "3igF3WvfoxFNgc7mkj7HsWvqTTqo51F4dGKXkbYSUScQekpK3PCgiazxD85zAnigbcXqYDHGa2bNHAH5UbvDeg8j",
  "key43": "h4U9kRhfPoMm4DdU7dXKp9UB6dVDREbrZ57hefDTsWwXWsj9pzUwce2akNAXHZY2WDMhP3aCRPgEBkkg7Qvht6g",
  "key44": "4ErZDZEuLQx9cU5c4hRBC8ZYJmEUVDru98E9Qyysp44n7htpTK98ofmU7CV1xwgVex4oVsnoUR93p6fTRPkr1ynn",
  "key45": "61nJGzDhEaJkohbWRnte8KUQ35GCaubEoxEJFZZVpMR8a5QqbkyMqXH2YhFpzrFt7G1uuKhvDShvjWDKG7isdpT2",
  "key46": "3f4QnQYdYUdaT13hESmvHSggptcb7qnhmvpJP2mz9Fh9f7XQpmMz9iLuxNtr5k5Sq1dHUMXrzed7KrHVFzTaZDdx",
  "key47": "3s7LTz9ZvohaFfqPuHKkCkvQPbyuyUD7wd932i2aA3pcJYwRUwKHSrgoEv4fKgARA7sNaEpp44bWSYisGfkYDnkv"
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
