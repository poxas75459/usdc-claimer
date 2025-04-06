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
    "4KyH4JhoeL6g3Y2iF1BFNvnHhjeuAWg91VMfrKLLFFsU6y2xacpqaDion8RY7PbvaAyjk6CFidqMDe8CZwWqK9kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByL84RnJ2ijC67i3CdtzYBnfLeyFkJYdozaG2t2K1osbL2DkqokfFGVFHW6LDHEkmTqJy4Zhzna6DtTZ1XauAAu",
  "key1": "5omXZTAv44hZ4BScP1PNfAuDsrnpSpjzvMi6B41GfB1WNNMtvXEUdjspujT1wDq23iwVPRYUwRmBfBRS1m8Sx4iW",
  "key2": "L5vv3KTxCnkJdV1yYLFCbV9DZrv8xWaf8o9JMYuTBo9QW1QpxXAF1FexBuWGNRj6Vx1ZvzVcct9qGf4edu2WBz2",
  "key3": "pHUFhMmPdudgZe6MAjZHgtF4cFwgyXvr9HarFDCn1ykbMwGfBj4dbRpBLcXkdABUPXjLtohA5Cbbuu5WS9oA26K",
  "key4": "4Y21SYwdR8g8cT7E6RbG7zZUyHmVvsLhJCKoEW5YdSDv6MnASaU64SV6rJFYvUWcYTMdkoXUi3WDtBFhmNLJnXzv",
  "key5": "3gAY4LQWhsQuhi1r8LwYKCJ3ykdeCiG7gfBpKPe5BcuRXhdkh6HQq1DyiNxPqAYbJpq8iWMSs4iwCH9pjKCu5DS3",
  "key6": "5hquRdhHYWmxzXGssjqftik6E8oqDbyS5Af9reqBkXpne1DNxFWhnBBEfitnvu7JzbAqtdZipBBkCvhZTKAHSFKN",
  "key7": "3A7akScgQyfasG2mqnR1mo84JyKLMABPqVZFFm3qcK9EBw9RzTmbTQW8Tdcu2aLyQTdPM84VJF2XRiSww9QnjPti",
  "key8": "2vZDMFq3uUvnS6wSAowiDNH8DBpWUHwdRD4tc8zGjAij8Lkw9SS5g9FWoHFZXDgv4JrLs9CQHD1Vwvj66E8KyhVP",
  "key9": "2y79moL3Aw5GUirDgvbgp2ypoHbL78dpJSNqhjYUbzK69wZNwWUAugrPLCDLeoG1KXzK33WchkcPypaMWypyEPPU",
  "key10": "3Fp9oFsugAe9TNudzQQwtCmi5qvHhfoT2cD7bQARviCTT8gRGzkM2a6THVueiZhmr7vNfiyX8ds8LJ3xNhupbFEq",
  "key11": "2GoG6H5sdC6zgM2zMVp1ZLVeNEkagd9BkrxThrJXEDA7PUm8UKxhkT7vGY54NY3ntT2FLjWRTeWJ722TTAzq48hs",
  "key12": "1ob2HQT46xduhtYXci74NvkMWcNkrMzW1BEY6N4nUnq9UABEueiDxk84tLBmZpZyCNeK8HdxjUSTJ1KEeJeLi8",
  "key13": "3S8XNEFHErT8xHiBahCKQsN4MinfMYefHToec9ERT4GT6pdzigVRntQsmL29wPhfgw1xs2FT4zt8y36VWEaoQFzb",
  "key14": "5fVoCJ1iWf7VM1F9hu95PTnkG8aBnXQbtt88G1J3McY5Q7V7AZocE4ZcAqZcfhM1LTq9KPMciq3rfZ2V2VYmZnRb",
  "key15": "5t3XmV1uCAWDHsTyN3sEeUHqWEKKcwVjTrHSZFitD4JVEQu8cXaPczSzYqutYDVZyqFEMQdQkjKnUcn4NM2kUiVT",
  "key16": "5exEvhTME1rrrf2DDvRA2HTwLKSRsCKuLMC5QS6vwEACgd9iokFxPTf75Y9Yv7z5u3yVGfJjbsVbSyK3xhAAWGLN",
  "key17": "2xvQT5EsJW9gwnM6DZYJzEsijPk1ZyL3Lw1Zqm4whm4xTrxx1PkE119H1qGkRHNdmgjFt3z995qTTiWQ9FtayYz9",
  "key18": "5gdxQkpZmw6wj9svE5i8SWPh7njnYhR3VMJpy1aqiBro8Ss8R86QALdvbGTYdDVf8JrdjX3y2d3W7xBCWWbVQUEb",
  "key19": "3GyoCUKPhSbBeJF546uPQgW2v2nbp37qXWL1yToDiPnJ9T4cLDhfjdjZyeAhi1ppvAG9jWVwZYCZYEaKdrgGJDTB",
  "key20": "24MmxWX23HWDGy75kWcuWoHPxWjECixy9cNCSuxBWxoCNUMqx3phU1xPdbTykpNBaC5VbZcSDu37fLprLtTAT6L6",
  "key21": "58x1c5EVbn8hiJc8W13oNbeQTZwmsy3mN4J1VGCDngEKufNn2EGfmC5RjERg7QvVMMTyacdbKquFkTpKy46p6vFk",
  "key22": "pHCMDf9hEkTsf1L8py8PfSXAguowiycjUeqsrzimfiTrU4u7XL1mjXzQaSFVgdCh8sa4DECR2R8bCRyim5g1HKP",
  "key23": "3JkqdwC4bxYgjwCQcRUAZSSLXvHep9oWmSd7Yz29B2g7dXwVXSK7dgT2uLjW7CxTqJbL9KdvDACxWBaMghD3ED8B",
  "key24": "5XGCRXwaZ1UNExYPssvmqmKQ2JyhHTJXwYdTswCYivFpVfid4FiPSRLoAPFLHkDPzmJnY9voBxYpP1iYCgTTPhHs",
  "key25": "2LVFF6bWr8ZxpNwzdzmZ3x6cfwLFhPkxygA74wmdPDP6i7QdeiQtkipu3DiaVpMMrdrqpuQcScK4cZMu6NKx1rq8",
  "key26": "2VAtkYoqZfZkmNwDb6e3NuETpnipCS1tAg1KXFjM92Cxb2cpzL2TLUdZQZ6vkdusZ3C5nD7fQkXoUj4Ega2EUkPH",
  "key27": "277x4AxyzcMnj16A9rVvyjuEfchrALF61c2EtGhbFFsrBv64asidQrbZu98vhPX6jXKk9gYq1WzvxHJBDv5E46xd",
  "key28": "T2s77pU4KqhFStxwSr8mdT66xfsPsJJoAdsSqfocMQrL8BrPMKsuNV3JadNKrpNud4wKtRn8dxV96uGESwDjP7X",
  "key29": "4JEMSbpwVus8UBP1gfaR2TAKE9M3zm4BobVNWMoxDmgCuHWbSEemEdu7iuDWBELXvVTzqYW2KJpvQtQWPH3mgfWu",
  "key30": "3FyNDJAdPQ1MRtKXjPjNHLmGa9LBAabL86afzjztEDQuNWAcr8sruVJXovN2sPpisWNGsrbAbXY3GNmTaBGfyEpW",
  "key31": "3mKgB1rNC1zs1rm9wFsNhZybSEAECNwfDizQ8RXwSpXmHcbN91a87d67Sp2bQBJGyq3hjpS7BBjqWX978y86BX75",
  "key32": "4NLorzuyqU5XCwqxQrD2XZGYCxsphV1ZXv56jYgpJaohEZ7zFmMJLbLm9wWNzhXiexzoLoHJQTyxbLhpQMNpEcro",
  "key33": "wsJNEcJ9p2Bg3cSaugAtzD9G1JMN7E33NWc8EaAzRebTXT4C4zMdfL7WpaGaa9SpSrrT196cvVgL5d4RJhbXFyT",
  "key34": "2eoatRHRWCDaZ1uKit9aA3bErC6nZsDME4K6xxGxeSG3ebEh7A8dTYyx2Aczb1aSTjBThAi77QGKmctTPRkpsXUY",
  "key35": "5axv7iim57Jw9z1A1icuHvfBrW3Pc9DwmXnut9kLx27z5E9SV4aMkeJ3zRzRJjD85ByBiSDBXiVL8WmakZbudhyc",
  "key36": "5MCvA8xAueYgGMhWndGc8zu3a4qmfosEYwG5RhfsfuXCHAddva2yXQfPBUnzUNpXcg82HDbWYszaoZJD5bSutTpN",
  "key37": "5u6dzWwHAszEZcBM71hxw9jUBpEW3G34at3eDLWyApZ75bQSkzAST5AB3rDfQUr5Sgcd168eF3Xya9rwhn3sQWcd",
  "key38": "5VLrQhxdu8Jrht8XJRnHiiPgYHyzH3ZLXA8UUytWPoDWQvBCiMpuv8y7LHeJy1hpZoPBMtXLBZEebCuJizsLBNeH",
  "key39": "3SqVwb1jdwkeoiEiVnrkuhzTZaL9z9zMxvtnQT3GP5tnGr8cHbXcTpk27PFewqpfS8RqRpg4LDv1kBQfeHNfjxso",
  "key40": "5ra1pgMSMDb7PUApWBXvTTCNBdGLTjZ9CSEZ1mx5fwxSZU7fE9h9GSFreSkGK5WiTJm1ctuNywbwkDXEMag1TwvL",
  "key41": "3j5U2cF1LPp3FE2d6Y1qK1phcMwB1ZMhcfbMLe4ZgXHzkPdzd5zMXX8REB2SoxMBcU3J6DukJyvz3pAWNDL7pR9Q",
  "key42": "aLEm2n1j1DafrtUu8f3HMnB2LbEBYRSTx4TFGbJ9PCEvgmUjZ55EUDQYdDW73JdnC3ciR6H9U4oSQ8saEkHMAWF",
  "key43": "47ode7JshisKLySEs3ZZe3KFbnAvvc2NJFnw5VHkt5LzmsSzK3vAaVLNozbQxXhb5Zedv4PhQdNUwCru5ReBjMB6",
  "key44": "5JUkzEANJveBfjfdowgDCorzkwQZx39SZy6tkiKbKXPYezsHxbj8nRu9zZWcKErWisXDAhrhoawRf8cHiedSwrdD",
  "key45": "DUXSbQCVBWiBePPs8zNtfRELkydDKaNpsREzXXCVY1daBWb2MrujJhkPekPfdTi9anfqUFoMWS3JhVYEHFWbto3",
  "key46": "3ofyQffnc8FSdtgoMLex3C1RZgCFgPUCnqMkuWDqtY45W2sL3uWM9wjtadh57vg29EaiiYWdDAY62Xstw8BC9jSr"
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
