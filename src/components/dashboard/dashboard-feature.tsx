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
    "3SUALsE5xFxyZqctstDNtqJby5PNCECvek8dDuhXK45sr1jNcyCKLf4uHeFDxZ2Zwy2BQU5UN61rPhiysi8QEMXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9E3f9YvFrVv3zsyQtUTTqQ59AV7k5p7AXxPkpW4sJ99xjQu2ndF1MFqqgFAcxfvch8MwfDZZyAbudme5q9WksY",
  "key1": "5Z9WSgtadoFz4TsYDqLBndtwiUFmbz3oGDMMuhod2vbqwgnByxhC3VpZY3GKJfkrn63DoNFngCvpbJ4YaswCDYXW",
  "key2": "43gpvHc1qEukLxg4ApTMMFW6c73jxLETUSnBme25p9zeB9im6KPveLwNymGEhjXjbhh8gx3viv9TaKpzzDshKURc",
  "key3": "52jzQXufTSfqE4BBumS8DkUjnNt62yM3av4Aqe2cTLzzkA51SMmhx6gK3Qkfxi9V9qdQtFWaxXc48rxpTwbAAwjy",
  "key4": "3SsgvVcTG5tZUGT6t9AAFvV5RBLBCgRm4wixHwRVqfidsRkTPE6dhu3U3GpLretLgAuhZxPxcxBWN23ntUidpWn3",
  "key5": "5ioKEqZGa2Gi2bKzALxZf9u9gy6m3tTGj5pG9SmvorbD2iBpxEWXwHtR3N7AfZc24V93ffu71LkFMPk7tBCTmf1X",
  "key6": "oyxnoVtkKg5Mpe1qt6yiVRLtZxonUvTXVHUbu21ePQJ5Do8x8xXjzFtwpvaehh7ALCB5Fk426Dc8a2dPbeakmLr",
  "key7": "2vr47RiDdrEbPpQp6yhhDQtUkZ5Dc6q9rY6PnC56s1oJn9znuoobeePhAuWzzvRTT1yXaTacS3q4r39N4mvLyGMM",
  "key8": "2SfJfcTzz2E8Ar7bXa5JsgU9WRK4CLSvdrcb33EyZWwk8kitHvZ2R8ZfTncWcCaUxMrwGjtYvjR3Ro114SusDvFd",
  "key9": "5tbuWZTQtzgYS4uBBar9ryf9znz6Jq7JxYmKBCimboPJzSrFKgvuUJbSjSZnEX2uw79DNumZmY4AKeiD3dou3AVM",
  "key10": "4eQtP5KKNuVdUczobn8YrPse1XTsD3TXC5ZmJcs6FziQYTRv3UpYZkryEFYmVPXXTd2Lk7d2qBzngnP2VRuDd58b",
  "key11": "NVCWHk89uEnrcSfyyQBQPwAHzuJETFBL9ThzFb9d8yKc25LX47QPvWAiMe42nfRDie6q1v5AS86FcbhCXXCptnW",
  "key12": "5WpHEL1hUsfxkakutoNusPAwDtcVdJ4wjJP6sq2TRGEr3P8Ez6ft9N5r6H8nPL8rcLGagsGq81DEufp7KvTnoRZA",
  "key13": "5HXbBHXeYwaCWsi3f2zC3bHGcCiqgSjxYRU44MLBBME8Jvs3QLjgXQBJvmiKa7Zwg7nbyzYebNLiBjDkpwNw3VGZ",
  "key14": "2gXV8fFsNwsJML6SCeAUY4WsSwGTur7v3X59vMz1iLkmpH1omhz6FYZgss6SkPGPU6FY4xtExNW6gZZGWPEtiZAu",
  "key15": "43vTT7hfBUgRVdiXC34oA21BbmiZvHoT6LD4JpdHtXUSn2qEX9raFJtgmSVEjkfyS98VubviMZGd1npxUdHBt6Cy",
  "key16": "5D9hkytFHqg5z8aJMiPqwZUr48MougcBjo3AGd5QKVTK3J81CFSjsau2hNv9WRsiyGfcFxnDKEJkfkjVoS4i4S5b",
  "key17": "4kXYuTZx3fwYRp5Bzy7taan9mcb2aojHTNFnDoXBMpeGEX5H6yxGUtM37tQmqWRZAMLTw8DjMMSxu8PrmyVsxUme",
  "key18": "5Ns12YST3wUw5Xj2RtbHg1pXmoxBWZQ4wYyN5VeRX4KwdJtJfQShwtJpCWCKD7kxcKXi3V7KVsNPzGPnLzs8jxmC",
  "key19": "4MLS8bRD2dLdQzZDAAWwNRVN51qCZaYHd6spN2Ws5G6JA9KjiDFZsGyMsmwjRmKdBXGfmWbxhFNAejyjd7jxh7yf",
  "key20": "2ZfuLNomt2aKtwZcVkp4qm5p32E7G2kp23DV2suiuu5pBpbTyAYft1NG1XFLqLtErRGZShnk2ZgYDi5fjp8aKQSL",
  "key21": "56Foek2th37QZM2Rr4MDM6TVjL1cSC1SLbQuVrQTdd3cAHXafnKji2CgGqJzp4kEQyPJHDnYxJotUzmFLvcXEiG",
  "key22": "4a1Z6VMc4mJjUZfS8LQoByyPWSjcBq2nK9psL68NvzPzMzvbiewwnENQWqsm4Qttv7kpDZ5Cv3TcYMXqgxGChQW7",
  "key23": "31FPh1VfLPCYajAaeAgX95uapXRDakt7PqT4bxeBLy2k9vRqDp9L8ng1uqPbDur7kVzVYAT1F9RQ1uBKwoeiDw6d",
  "key24": "4fzo9sB3w93twUuJkhVgAVw2eawdSszm3kXsyR1EBVJZzekWRoBRLCxBw1FDKjQDCN9QXMrP2NyiVLMB6AEDDdrK",
  "key25": "5DXBhtLPZABnEL5tme9rAAZqeR8Hsbo2WrhpXnkWfeiyxVR3GKjhKEPCmtHsUA4x34oNhyw2rXmacJpx1xychVno",
  "key26": "3RGApvaam9z82GTPEXBM9t7ryFkFxSmGWA1GefKu7f4tCPQNWYU2FEES4QUrKBaRRzxg5WkPJsuZNWDQ6QdXMLmR",
  "key27": "3bhUz73kiNLK9GhfpFktN1Q9h49suR2PsN5BvDojarx1X6bMfMirTFh15k4Mq5G86scjbw6eHZBaBhZmT6hrFf7f",
  "key28": "4o9GRtSmUaWHaask915biChXgWHhiwbZqtbQpWu6bYC66LJMeHpEqRQjg1p4JpNo2UkzuUdBKYDHxDJ5mQJRG4n6",
  "key29": "2Ai4x38djzDcR2kubZGSCbdae6MGASjDv56FW8qbMfYaYp7a3mr3jZG9eWyugnUdsXzDF6cpCdsqGjv1d5BFsNxt",
  "key30": "3rn8JKhoHxLi7GLCYaG4NTfQvLfMgNEEj1hpBJTU17C9Lf7bbprYE9dKC1p1ubq3ZaZBQ9aME16cDBZES7fTuGwf",
  "key31": "2YpGPbWXh6iMGL8e6DVC7PkbW3YToukiVE9Ve7HEhvUCnyNPQDmvqCyuAACdF6t9E4Bmk8SCoS25yP11FVfgaoWe",
  "key32": "5uj8EiToTSQ6dNfNjwUa2zst9RmARF2ZELEPt1dzXfKg3w5A2oqxYLug55WW8HzZk7e5meqaUqtJujoGC9Fqzq94",
  "key33": "2WHewtaJKBe5RJwzX6CYKSBKhii11Mi6N4hpA3NkQDnNyiFxNhf2j1puTRxSrnLuwvxhu5eGrBQN1rfxnUMCsecD",
  "key34": "4byMYsuL8vYshud65NdHbVVyK7MAWLKgyuD6R8D94KbEBcgaJ84FowYE4fMV1Fbp2sNp7JBGLBizitWnWo9kMmKf",
  "key35": "5FPtf5LnCjaXbD6ed9TcT7iH3yEiGq8Gd1FRJoekN3MbSGGLFEtGfZBkAqobYUn4naiq7iFVEQCRSuTPbvcBzFz7",
  "key36": "2BroRi4doDfMUHiotLi7BXyVKP2DhwwE74AXYtUaYD1NVF39nG8KDiZYRHCBdV37TLxQuRcVPLE2TKdMCY3Ncude",
  "key37": "21f3nRU54VG3sWFvJXGBqk6SojS2MMdemY93fb9YqLykarUDmR2ikQVpHMLEHAaWSqj5dpaJ9jGBezNRfv287fg8"
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
