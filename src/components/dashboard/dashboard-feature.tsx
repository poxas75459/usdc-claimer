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
    "5H7KEpj5fLyckmzFTitJnZezEuVgpDs4B2f4HdMjF5VdvX2Y3vUvzBwHcSy71DgSyDHM2axx1e9cssm2UdpLe5Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGLyeqTCiRRQEAfNrQzg4bVg1ebQW5HL8xvjUcqVQP5HXaETEPiBPuEYiUM9eceSqQWwt5VvPkc5zjJMxL6qT5N",
  "key1": "3aesR3MHdtA3fe4NLvruuHHGeoaPhTGHv6TYJsTAGsK3v2aNiLbjtC8r5cu6jpavc3SLuFDLum4ABPFWnK5KHgsF",
  "key2": "2cP1uLdYUc1CCQx3Ph6Jk9Pe18W2xycZtqSnKzxcDSaAmPkxNCAM9Svq9qaRzt957M1kHMnnEkkjSHTqD96M2HUN",
  "key3": "4bea9GbKCLTtd4LtFqd59v1roFuvTx7gDC8U9F2zR18NQASZCpA1hZN7QdwjggJFNeFFAESAHfepxzwgK4JY9ecC",
  "key4": "3UwcKmo7grsXXXZU8MK9YxvzUdSbrtsFQ5yptDFq4wtQdycSoFcKgfWV44rhumpcmYXxWD7Z8q5tZB2mwB41RtXU",
  "key5": "515MtEgo97jH4D2JpgDqP6CoesjF27KcWSWUenoe2eGkw5x2dfQXNy8vUj3mVN3e4P43BWCMEc4higx1mawdWBdx",
  "key6": "2ydYj37gwe3A3eBNhcZj1Fi4t8J7PJLUduZFaSGsfEigwXcyqY6NzZpHtMSzQ7DjP62RmESx25dMSgUfmaY8X17P",
  "key7": "21N8bBqQ978WUdEBiAyb6znSumUbPVD2XFiWad7TuSZyJmvnmsE1TLUR8QFLM6gdhZN4ji9UyBcMqw13VFsweQ6Q",
  "key8": "3xV2CTxfvD4SrHb3N1osgA3HNmjvZr8945m95x42DnpZmQjs13oSvw6DYfSdne85qaxJ6BE5S72BcT8x8Voem2Kh",
  "key9": "2AnWdG2jMg1Pxuf52BGK32TpDnM9QmU114mpDJQw5ipeteCD9hZoKDvGzn57vzv3y7hegZCA4KFnCD39ue55bgNf",
  "key10": "2Gtm3985vPbdM7hUmqNc7ECaL9xovqkaha6DWgqq11gw3kSN41ECKqX1NSnUx1JsHByiyDfN8dnwdRGgcGAzXPau",
  "key11": "65hGkEoFSXhbcDPQNMqC4oBXPTpQ9vF3an5p5wKBj6vRKFTneZcCVdpBNLx3mYXZpKKXBA3xPsdirH87gqfxnzv9",
  "key12": "7SjntM6fEkMJMBwCqvgDmBpi6KAubDpkVAn7isWfsqEPNXqy6oPaHGG2Z6aQGRqp8YrJPC96nxi9rvTrtnp3msL",
  "key13": "3RB5t7M86g6hzf9V4E98RwYd4C62aC2a9u5qJHx1dAUts3nXbMgTFWLG8LqmeQsqnqUDqbMCqrnoxpoLPUXsdSuW",
  "key14": "4vsqWqXhUnsFTYYBUdDAXFU8Wg3L77brJ4PTia3R2bbMTuReA4ZhEijyLr6Y88CaQovKiSFuDqtcnmGUVtHxayLR",
  "key15": "9TMAcE2xTsAzfQDLXwFjqcbgFBDHXrSDAJN5RbZ5PaFuePjQz6aPT8oRRW6UJdAA4Teoo3DMot3Gr9CLDjVrbFr",
  "key16": "5a1Dn77Cdzs3nVSK9cRdf6KJ4Bvy6PXA4CqazuSReEXxtkrFqKRLaYXDYr8YsLSPShUouogQ5Mou1DAEubBvzimy",
  "key17": "3XkZRQEfrTPp2sFrwVMy9qRERXNiZRx6yyjD41bNmyhLK6MvvNM9B2pWEdqJG2Lz3hAHrAorfza7PKnAnX1qJqN6",
  "key18": "3iBths3x94WxuSi9rKvzMqVB6KR4Z9wBVCRzChvz5kCjt2SPFxJd3PnAPp4oKb6SuqMFgC98Eu1ovTrye2nGip1G",
  "key19": "3rZZX2opRX7AkmSPoRxQYNV26daqXJnWbN18hrGYMhBDUSNaTde3vqKrnonXUavt3gJY69vsyWYMDxxrxGz8724P",
  "key20": "ain4idH4GALrkgjf5UccWtv5uACjWk59keF3h291UVDyhjSaK4rhCLSD3SvWzh58ZkJGrEyt7HWnZ5AnSeFYZgH",
  "key21": "3qFQgakTiryA32dVcBYQUF28JavupgnrH2HmcH3s1H6iyexADCVqrzMSVwG9rCEiXaV6pwRRk85n598ScE6jxJwP",
  "key22": "4UUz2WHy9swXbd8LZPSgaiHweMczogHoScM6fSbXZsgvqDH6H8E1172k1h72KtR7RhpdFqywsjeDPoqzgDLqBWsd",
  "key23": "4Xe8KnCCWK984JdwJoht5r7eAbLBox9GK4raqqnrzGSNzVoEaiDnZHLgi9rQKkzKVrWCVSkHvqjyxaxEf22MJiTz",
  "key24": "5cRG2Q3GD1tpvxyvz73ASc8ma4xYVzpBeFhxGu2kbg3fTF7mrYkecwMqfU4aufao4cUhqx28TKKNYa8JSxNFnSh4",
  "key25": "4zGCAZX12ehrBdtBYNNcdFdGdwUHPjUeXwvgWxroywSeP1e8RxLLWmuThWAXjcmKb33g1s3EooaCUFgcNEzrEpgZ",
  "key26": "3dGVFuEFDwccU2wbz3ge7nV5GUELJxg3DQEfS8ya7Z9WvBRDiHvU3jKr2gD6274UA4wByLLGLthtKb46mNgtisVp",
  "key27": "p51JXwv9MHzBfgjCQXYapkWmCcRWWWf6RN497sdFzBCboYrFxbfi4CBTz4mY9kkk1PuPjgwozL8oTnaHFdQaFBX",
  "key28": "2SuUTQ8ThCBDNDnbar2Rv7QRhG6qMwNk2dCx7etYzbnE77pAx2VqJtminoTfLZDujr15R2zs7Xfz9e5rGUiTWv4x",
  "key29": "3FrqGrz6CpgpqCtKtVgzUBg4ZogvtAy2asAuqXr4FDVXfh3hTr7PHMHwdoVJAnedRPCUNoy37Ji5DfSzxM9HsdCP",
  "key30": "4SERWdBHAX9xBhzxW57y1CPAER8bTRftLgra98B7NFfrHqkWZ2Ma8xsJWQmMSiCxAxjxWPpoxM5a16wonpgLEJvV",
  "key31": "H3b73o7XwtYYGF6gphFTVtouYwYqxeHXAQjNhngwZzAndp8zisgWFBEUpDCEz6pw9dN4oE9sCeqXhvkBNJ8Qy1X",
  "key32": "4wAiG345Ws4T3P5DS2JF7XZahm1bZFhLrMs1hFAxD6XKCABfRtWcY32EdPSRmEeLZPm6WvahXeXHdeHj3hatXCeV"
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
