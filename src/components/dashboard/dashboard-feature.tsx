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
    "5U5wGAPqzACg1joMHCv8kJebKrMvXy8AsgHtsKPCvN9Nt5QSwVSKZbMdhXK8PWX3uiAf8LSr3F7nuCWNEpETSFqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37urakpeGWzEWMwBvfJJvuwGMuSCQTbSHUTjJWy42V3WRWRKrBMauJ4shT7tTCUmrs4McBE9PJ3TbW4ee4NBEZNc",
  "key1": "5tsG7e7JN3V5PNwN315PrgaKvDhLkRqpdr7cpsf5BXvz5gx34K65uq9kHmZf6tavhCB8nyWc7araS9qxSwTKNWiR",
  "key2": "5gJNSbcN6K2dtG47ebFmGmWAaDEv6erhfWhV9UYqtD54NvSovqdD2hTM7KJUZj5TpWaDxxWN6mimGCPin4y5UV2E",
  "key3": "4iCtJiBWWiX9xNVPTRu2eLfQM5Nf7yQ8PPwes3FR3mZ54eGe6htExeoApXuAwGncwLxYh23RtovAWUfNH5eYvATs",
  "key4": "2E3Zo2bRGaX3UiDLdJzBcZsyXMJ53TSkrY8wS9KBFd4WujDqDJKdtMhQwDQwZB68CrfMdQaB6dzv7FnUctGSuqEb",
  "key5": "46hJczKeERutxtSHJsijv7saLuup4ZW2wX1FKkfgjnw86BywypTLJ6JbN5isdCs4UbNNQN2ujNirk9TpMW8sTExT",
  "key6": "4swjDhJp5AoywVo3XSDmpUmDZG71qUK3dANTe1CX1LEugRrxgSBL8cR4u9uWsJK3yyQMXH627wvz59S7xajNUsv2",
  "key7": "5ydvPfqvEseK3umkaBzY7rXXTZbaHwufyf2zdReifFPPAv78URAEBVHwTBEdTK8TmEX7JRRRQfMrovrGT5nVvFES",
  "key8": "5yBsy9NqYAw8oF5Ns5F2j3ZVnSyLxcKHvSFmYDihSz4in2SfGNRmK8cVpLJoRWosfrsjdY1dTCZhJvATrF1npbqZ",
  "key9": "Sp48NmURavqxi4x7araZQtrj1WFkMJVEqkGoMSP7p7pueuv1sYScA1qjmcT1C78SpyASbojmX2rwEabpgfz22tz",
  "key10": "yF5BHPjhbBF6RRBXPfRwumFJGYSED5eyNGFcUeMvqaFjKz2Lcgv1vrN7s6oxz8H4Uf6tBz7cbk62fMBLFyd8Bcw",
  "key11": "5trdyWutqiTwSbgUEgrKrgnncKBqHAMz3SbF7vsdACYwXvPriHbvPQeaKo7PbHfLi7FMZUikPkcHAUKc54StCyGh",
  "key12": "5mbCh4CKmJBmgEJwMx2Ah3n5vu5DEg5e7rWM8tVB3HWWtxrkp22Gx2f6miNP61vHhX4o9QP6jLbt6ko74tVos3DY",
  "key13": "2prT5TqTWbcmqGrDEFGU8xEjJAsmKqpECuea4iVur6ABuqyBofDLiPgwRDtfEcPeKw6BDtQSaVXKJHyCgV6CYw1f",
  "key14": "61EK6sVPNKyxrBDLhvhGjWBzvUG6ocMTgyQKyozMbRQB5vNV9fNWaeh26jEzVPkTbDRJ7333gjKfXGABXYh9sSTm",
  "key15": "u7cKJ48acq25DyMdMWf9qUX9sKjRZNLZCir8JPQUUpdfNaCz6AU6aRaBPPniFhq3bMJANnPNMVCMwZg6hMPeRrQ",
  "key16": "3mrrX3tLE45CQjTNyrWTFgK61yGZj6VRYdjk2r5No9DDXxweYMxPCSKuSxiPiNGCTYZ4cAN9yPMzHWoPTyUNvEDL",
  "key17": "3jGc25GNAo2cFxgag9uXhzoR29USRyMU86t1nKBi4mh5udcQqUmz4FnoeYJWJMuNpnFbiVqRqwC7WmtNCFY5WkUp",
  "key18": "2gtVCvLMaWzvWAyBCSAcKQ1rs1BWRQhqCX7yCMpjbdLfrZT8VTEVBkNCYBZUFoQSvyMCwrKYUm1uLDURs5kF6BWB",
  "key19": "2wKNE6b2qzEG5vz8mtCYwUiWBh3kvSW7Si3qhRDFNkfcxEaV5pbLBz7xFpYGr6CAofFU6S7uQPoovUBBJhggupGv",
  "key20": "2jDrWDfAKGtYjYLWin1JuzVxShbEAJZb5Wrq35iyzKK5S3PYYhQimLaq67hN19AcrDM5BDLLTchCcGxtTrWXo4Ur",
  "key21": "4rKNnM7dTPGmRagHRpskCSLPg8EraGDAyYmXNpoHvAhoXcafcEgh8cM8jBkXPWffcDy9fNYecDqL1TYEiJtn6jVK",
  "key22": "4KuYfSm5LqssKU44XpWmeYzapxBmQKWMMTMR7ybkUFdaALb6tsEYgdFTaEs6udcPDgbWZNF8CDbJBVqcXmshHDVx",
  "key23": "bWJSEU2fqDtcHxQqSKHJzTt5k4X15XEUKD11zw8BZob5XSHCNukCvFZ7pNZ47iGBeQGpNmini7vgKivcLRQX9qb",
  "key24": "zjRpsvLtCC6XRrdyuWxpCMsw6kxSEiQ8Q8S5fsS5HisbCnf3YXerKNMPXK5x6rEFwobaSaYgoMbVwPEzs2yYUMn",
  "key25": "2AKXEBNyR8XgGDsiqkKSJv83J1io4UTRH9hKBJzNiaYjimmVViAKxmevuXY671rvQQ12XrNBqrfPEtnCHjwus8kP",
  "key26": "2D8ibKd6KNbNA5bUWj3Wg7m5Rn8TNoYLPjeYHxwo1ArNZpvZNH6f3ddnom86u9dEdJ9ujeFb8KQyY1u6CU1FQw7o",
  "key27": "T17cUmYPEBS2XKYURoKNrGLjbjRS3zUEyoNLoPd1tAhwxQic5UTToT3zbfzxcq5FwtrxbKCDvSqLTTxPTfYwKDC",
  "key28": "2i2joC9Dbb1sbRjD6bwWW3QXW66NV9y7NBpquRG8EhGYfcJ7KsSNBTdqoruVuoNj9JViSxqdt4WE1fk1bC6RDUHD",
  "key29": "3cfZShMj2riayNmDpXXx7q5oSgpX3gymN52ES27DUgd29CHDGPY1gYPdgVZun6ip2sHiEUMejJrEL8s8kS9DgiCg",
  "key30": "5Z2myZWkE3FvZyCuW7sBsYet76769jvxQouPprWcUAbUkapAsRV47yz7bStEJvMRu39CQqjD8vvH1v845StspS53",
  "key31": "Zatq4So9QGQwyQUHrESHbj3cEziWXWkdkuRMQxzHrkBRqC4d9f4UBN7Vv29xgE95ajxyxZghMP8Kr4tLGFaxhEX",
  "key32": "M6Z78aUQzBFJa1UFyzeDMcG1EjeMPfVsFeUmQcEWBX4AupUkdD1dTUh8iMMown4NuiD3ySqU9pVgUKMPpSsF5p4",
  "key33": "27n52cAmgoAPkUaRowsGsCbioqWUKv5Uk9XtC2hUzGVN489xTuPDd1TiQnpjVGhGnFXQADwckyzjrEaaX6NWw63C",
  "key34": "YPaPiFxkSDhC7VSUSnWeXoHm9xERYvU3hn5CiLuAZvdCiEFnFvzc6HsG9eGsawtjcBFivbq3Qg5cyD9CcP3xaQW",
  "key35": "2S5G8Z9n2TTzuqEwyWP7NMUFJsnyYDXh1StcaRTrUxDFsAu1STZjdPQZZsTRcqM2Uvm3fT5wGD6fWfnNgHj548QL",
  "key36": "kSpWr2FjDWYnXSZu7uL9GMjYWopWGzd5CjiaFmfxEf6fF4iQ4yVmBabG4zapzbQ7SFBFBrF1WYq7njbLDBgEiVx",
  "key37": "3WyBAmr9RDAKqTvPahfrKgLvA6juf9njoxQGQn3Ezy4DBWghAfaEf8d9zYsoMstm1K1PY6muamwVFNUUQ8KBrRMP",
  "key38": "2V51GEiZH35reaZVeUBr6WnbppJUpDDrPyjPcyVA689NJ83GZJJ8HxPQyYNxizkGCgo7E7Jpde3KDYDHepFaEn31",
  "key39": "JppsTbW5vUZamk1d8eq2ZeeHS85FtvGryXVUucS896Qf3r4MAAVWRSEyD1re6hJgGC1xGehvsDNMBv6Qap51wFM",
  "key40": "4hsdkRQTAsAr1dd45AGyBoMs6U4ea2yWWGjaCWeXxRFHfQ9jw5z9wm5k6EkftunukmhtsnhHqBQdc1bEEmgV5tNA",
  "key41": "5BacgzkvJPWAV67bCzNRrHTFEueSg6f1bav6bsJsWtzyqBwCk2PM1yzAf9fT13ZgqbXJztSZzX6tTU41Gj2ptoLs",
  "key42": "3yHWQxtDkbDzGvcx39CLfUthan9t2xNuLoT2FwUBmY4WQiRKVRSr76dbsFrhY7cynwbEJ2jRfWK3rMaEFZKbZZMy",
  "key43": "25qudCrjsRJF79g2Fda79YZz1PVP8qpiBGqCm1hD1hW4pzj7b1c1qXwwVPc5wkpSQBj9kYDEDyNXo8xrdYcgHMm8",
  "key44": "3c6kmHyWBXyMnd15Z2WVQvcLbwz9sx1PYszgMtdVgY6EjbZG6nFB88ssvpRMMYPykBZyTnwcgyT6zPvBiZ4k2c4J",
  "key45": "26mW859278VWtR8d69Wri5mut3MCn6q2cN4hBdCaNEDNrUSELJF4A7CzD5Tzf6mhGdX2WxH1sz35qtkGonBpV99G",
  "key46": "2f8wqG8qTNxoyWaozBBpobzwQPh75horxXPrAq2H5rrvdqD9ShFes6PDAjTs9jECedNiVUNbjk8cmVu4ub3HJBh4",
  "key47": "4j51vo9adb7B1DwqcA9CUEbMU6sVt7P3Yg1gcZd5L9Xs9kEF2RW6Dvg3C7efHg9Tr3WPP8tPYgsuaTSorsRQKA17"
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
