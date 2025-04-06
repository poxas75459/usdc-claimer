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
    "5K26v2q2HcpwVBSEDVhBXwFeZzPF85G87UsusieEjearJZj39tEhpA471nbytivS1pMcas73YxosR6JNFayzjzF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7JxcqURVLgaa5oZbtwwpcQ2q1YL2g3NmTMNgBpDBEzjA2tC5Di1hV7H8U2YyLtwtDQ1syNMMpvm7kCiFT8BPJY",
  "key1": "3qjTFFVf2Uitfw3fGWEtBX5kPs2uP7diEaKoEiQ74BSgHiLEggFyjEwgwizP1jYYbPaiw1G5Aw49Hym1WpZgrJcP",
  "key2": "5NQBDP791yA2KN9jEc4FtR3hbdoKSYYrAhnJERow395KgfL2dG5Pmx1Yn8wofMgrcUPcEKJiUPwtJAfJnSNGiq6m",
  "key3": "3RWY9TJPGSNG5bcwarVn6PKSyidHibATCt4G9cdWseL9giWkQa2mKmiu8p9UPLzrKuC7r2pBrzLrLzmhZfJ5qtSC",
  "key4": "2hwrmGzdFeksYUt4j42afCsAxNV8Wa8N7xsUZHCcDDhAvsSRPdxtrhyzb9dtipVc3ffd3LZD2QxVC8U7hFpD1VRv",
  "key5": "21u6pLKeVfP6AyBo62St6wVVMXwxeC8v7mH2SH8baJ4kUyRaCCsM5761MnAPD1qrKLtpBWukpbo2bpEZCKZftkRA",
  "key6": "3i2LPyVT3T2VdgU49zZ6HFwmkJHkKfn8MAQmAHknv4NU9jLGrhPkp5Bd1CZcyhmRvZZ4AhXwhKqMEXmEsgpNAAp3",
  "key7": "5niX8EbASWtJQT44tyshwvCC5p6Abss7V7EKtV9gwLtpMTFZBzqQ5BQM81DvVUBT6EvU3D9Y3Pyz9tRoa6fr6zvh",
  "key8": "5Evh734v1iyg3jiAEQbFHyPEJ33oVrC1LgTfhWMnh6bG6NssNqypdt3DjxcjcBhVH6GypLVjqVvHkF4YP9cBRfZc",
  "key9": "W7ahsgdv7tvaErjZ6ggiB8StLWKcjV3aHKywnAfMzhTge3bokpf6RDrvxsbx689yYfUjEjd1gYWnJTrhZtkEdvx",
  "key10": "Ms3TZe577tMVun3xJxWjXDRf5w9vfWcnLkb13FMssZD4okHrjvRAbqfceD8Xy8X5qwxKs8W1AeVQXaX2AVAbNtc",
  "key11": "UKvpnDd5itsdh81u9dsh6N6QV6WJyGKnmg4bd8cVPpJLvJ2KKVU15kKc3YEFixD7ygGwb64Z6oERANxjQQWjN51",
  "key12": "2ZStZdYrNGLYtGPZ9d9LcamsX7hSCe9by4tcaVtD147CcQi9V5YWVqvxbg2AM3Xibx3VPEXe4J49iD5v2CTEMELX",
  "key13": "25ue4YSbAxjCyPuXQ8hQRAzW74tCwJvpeQ18dhssSSkZ4hxPpABPy48ZneNNAF3hdNGG5MCn5ZpYXsXzy5dE4p9Y",
  "key14": "3wQXCW2C2zheA51ZRQqk1wXNa1KTKj6yBPE43mA4HruRNTpXLrGdaKTSDRiRxhn3aJu5eJGg3DKGqcYii4bEx5G1",
  "key15": "TfR95TvccroeoHye2D6s1BMU4rBdRnc9UrREijtCDw8Y2hBqkHGu1TeQVUxtAgbrqSiiZ2ih2qKqbnSuMiR56go",
  "key16": "3zu4uBqjkczKbmbiAfJUsQwBCuLUmR6HA4JwPVBz23Yu3bvURD9Lj6Q38Cgrs1T8nFMBm4GvD9ffLzi88FAKvKEb",
  "key17": "3iYcBXpFKgu3HhJLDdg2Q394jiBXyV7YcPxkLNJrx24mwsXTqiXFL9eTKQwnQMKB6dfWQsBbtJPfRWy7GKqUyLf4",
  "key18": "3KepREXudhyHqJaNxquehhFyUKHWE97UPjhxyEdVGo4dp3ngMyr5AktLrUFqpEc6RcUdQw4rj3pTLPFCr7ZxxJw2",
  "key19": "2givHpom6NnbATGib3iQQ8KanJMVTs9RBX1YGLSE5Rq1FyFRfVqT25Rh2rSKvANeLoEBs9trLWtUhRBjh2czx2tg",
  "key20": "4MmvpqQkQr9WFMmSnotwRehU6mrrXbi4aCp8AcCNpFHMUonPxyHvsyrSsEojfZ8s7hqb84SVEs67pBsC9NmKCxTf",
  "key21": "2sqFQBPyicfhVP8j41KrdbdvFAFDHfFsbhf3hJiwbfq94jSSQ5i6iUrEMmmR9hGNEqrw1X7HMm46Zs9DoxATJkCT",
  "key22": "4W8pmYEJBTJjMitq47K5MrkBvC5Qiy2LWt8b5CzjfCGoDqLriUSia4x5W3jg6SeK2d6x81BCWtiK8rqJUiSES4rm",
  "key23": "3nAYd1DyxGddenrULVgbFpGMz9YxBm6arMnFuCgZurkpEKRoEWi91eSiVVdC7jYjQJkZoRKobYiqeYwf7KJEktbi",
  "key24": "59RE2H7bf9Vuqw5Awzp87Z7PCCgEveegVPrMXQHnrSgooHopcXxCUUApXLRF8jkcSN5hdSbrdDhVvM9R4XSPd8mR",
  "key25": "RRFCKHAi4Babfv4XedkKUWG43reZ8yMon4zSrKXpnECipbED5NdDZQwgrz1ESBnGQycPQx1jowzzCYUi8DriMwt",
  "key26": "2tEZVPxW4M9dA9V5wn45NDH1dvcFV2PQtttt9z9QgB2kEUETJJWLPyjqbVjG94dGMKgjhb5vSvA1ZXJLHwx6x6sF",
  "key27": "2F8edZ5S9vosUJNbLMhb2NGB5gbeNAcS9J32VdbePbZE1NtgEzP5d6q4dDkngPRXqaauWGMXSQ5S9MPCrwjya35v",
  "key28": "5XLmt2eBiytMdLFTpaupyKqTypo7BSuMN3o3z8PZxPRe6WgnWmtzbPNtVpFp3muPNXYFj9NDv2dwGm36XgR3E2KG",
  "key29": "7AFvuA7Q8HRpAxqStE79T8X2AeCZbVVLrUJbsCkuMfkSySsnWWj6tABkcQGdvtbEPobaPP2HtighPc2rbsR3iJj",
  "key30": "4rHEeakfQGE584TAHze9X4kTE8PxdQNuHPW4j2hBuxkvjoXBRxWLDtDEdgXyrmHujAFCZsG7px4ZS5vRH4HGEUw3",
  "key31": "5iaatBtwbagGsjj1wPQsDTpgn5RAFTtwCnCqpaqpMFpo1UULvV72d3w9t9fFhg7H7vv78VCXdF8GyiQC7Tn5TFmD",
  "key32": "31fuqhAvpHxbEUcnjb73s5ZooLGjiFpPEvrSkWsqmWbuzH8FCqd4owzAMHGHomgmxa7MYeKwniEeEAjUJvq7fmeD",
  "key33": "2UC8FvYvhPuNS1javcsgB7KHXtxWafxzgUwrfgtiimPsafdpPcXUqvAbzcpAPJMiqndZuoSm7VHa4ELsgshabL9k",
  "key34": "4mdNyPEuUbBLcNbQiJqFXehfaQ735wrN87HsorcvvWnxHABhxrzXr5nDtiYZ6wh2i4XHW4TGZzbFqZSc3Ve1qkH",
  "key35": "4XzZSAa9oR6zVRiW7LVv71Z8e8FrxbVAXAJrxsv72Y6t6iCQScwmeJwBSEtkvLKfaubSUMaJm24WpVL7di6avL3z",
  "key36": "5LJZJrL3khRfsKm3QfhjptYpu5sCZ5psZg8wXMqoHm1Ts3dakdfU4T7AKb3iXaX8uS5idVVuEXjNh76nwnxRSfSE"
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
