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
    "3cEbAu3WEAPJ9ai3r2Af73dtysEQMNMj84io9py1JVDmQywP7DGro4R9cdSFtrnPEvPhv5HPnv3FV6RHkRh3wK6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iPHKxSmMLkRpkNzGpLZRsXXc3SzoGzuam7euG5mzPoGxY2vcn4LqZdayqehL7NQGi7FmiaAg2bTy9LhamYE9nCL",
  "key1": "542oC86F4umZjUmC7pM7gGEyjob5jJJxKZuTJn6h5imyuCUno8huRGF58fUpoq5ZSKhVDdy9ityue5x723d1scfU",
  "key2": "59opkno3V5ECwweDgZRANKyJ7PYWYCmB7q99SHjnTEnHz3erbq9Y3cTWtd4uvUVYfPLhe4NQjRnD6PcRQvskvKvi",
  "key3": "4p2dNUShRb4Yxcgjzqc1gg5CYKi5H6dpkfbXiVsHWoAy9hAPPA5TqzQvhdjL3btyAwVQseaAmdijXh69n64pu8UX",
  "key4": "4gW1sm5qPFWPj5Z6tpX4WNiaBHr1EStc9QW9qWkwThwTbT9KEPjzwAK5ZU21EEVhXcd29RSYL7M7kZE31B52oors",
  "key5": "m5aZuECopb6tTdX4WeuMSHEidA9vMN879YaqBCs1BZa7GXHzWFkme1JQKtDEfKnbjy29SWtrPXbAKVPggUMBmdg",
  "key6": "59PSqkenBe3y4zx9dxLQpYvEM8i1qjcRpS9ALddKb1vmRqFGB8U4aVWwh2ZhMUKgj7F6DQnEsEqnfWD2ELhjPg29",
  "key7": "3NufLjCWzhcSfnsEyxsoiTAayguWyXt9MZByLMpZaiiPuGgfuz1ccn7oeUDEjUF9dYCP7jahR5X8RbDDZxwxxZTE",
  "key8": "2kAaoMXsTFHQvTR9XnnLCF6PMY6agWjpdGGy1fKMbKT1JgSYhq4FZ3RupVeo7c8Q9QysevSoDpSX65mvcumgWNvt",
  "key9": "g4BFJaDxMCPKweq9redtn599sWd731UMkHN2s7zrQq15mvBUfRJ3zYg6VLFCGBmMx19Ah2TnJH24AknHAPuHzSY",
  "key10": "4go8Ct7355aNT2ydHewns6xBCyi2UYfKaDTLWxBQgqtsQ7MBHdVM8JpnDriGmRjADXsYVjKXDeSCGmuWFLKGzcZE",
  "key11": "5Y9zPPetaW2mY25pJRXf8qjUPExxJV5f3sTs9QoMXSTCV3dVSC3tvWAZSVLSR9n56rMHexu9JRZ8c1BtCdvP5scH",
  "key12": "4VbBAWdnsfvndt5Af6xdkCd1Kwcftn3hav1bgUYzZm7HsYPRqmLj1k26eAUZrYiQhyrM5YRV6zZMUsm95x8isM8m",
  "key13": "hFQZTq8H3JfDJ27nfJyKmDG6NDAeAGZphXz8mmHmA1tY9pFaHqNc7rfiRSp1D8MzScYGGcSc1dxu48xUgt2m4rA",
  "key14": "4PKn7oWU12jZgHCiMgwHpPvEEJ82thbY2j5rQz6EZv8exX96FoMDocQZevmRRYs2Jzcch9hSMQ7ZEUPR93hJCdjU",
  "key15": "MoiF8zpac81n5jhp3XGTcB6AwBqP1pJKDYpuHjHTxUBqfdH14mrGt1EFdwRgz23LTRXRLUuqVEcL795G4AjM1fR",
  "key16": "2wetx43coxaqgpKiKZJyXYvEsFxnbxWPkNqvmpDfhqh6EjKyauTkMLFDwnT9KGc1L7xbXo6J7oEeK3ACBsj1JnGR",
  "key17": "4D7UHTCXE6FVS5p8SLKDW2qxGdPNYz4qyzCY8dX2KsRV6KYTgKNt7SR4Pk2ymgft5JviwE1Q1RNGKzrr7W1Uvn8J",
  "key18": "64sn1zgMh7nvbh2xuKTapuAgFuSZiSA92j7rKhjM1nwKFeio1KVMYoMjcQitEG66APTqUFbc4JmT7gYih3RBHKiE",
  "key19": "5TVHwtvmA6zxZUzVLGMouNQ6sWUhBRnkbwbJfmv9k6Sj5afovQEBhFDkEyyY4FWwfTVVvBHWHzdxSEd4h7VXjTqR",
  "key20": "rzYugtbbidVWHogSmvVJ13kPBdtupPKNdxuAoWPoVepDmJ2rwMXNYqVhNdjFKpxrsXsNu9QGM6PAREFXGHSuvTk",
  "key21": "2kErP88TVD9ZF7bdAQaDNZ8vedCyggjZPUqbmb7WBTqMr37axuLw2jzv6HvNMmbvjAUm6V5vqanDgxK5qCvZo7Zp",
  "key22": "5NQzV1WKJCYYK4ZHCbFk2WWzjuxgNAJUcFxDqTVEoL586LQnzMrkAW4cspQNGMtVx1LH7K6dui1YA3GQw2MHYTFo",
  "key23": "3fSEvmm25nVTzniDrhMWwe9ytrb8qTpuE8Z7wjYAm7rhsoqtiEEmt1AGAKRAHTC5PewNdAEAxxGEsGi4Bb49kqYz",
  "key24": "2UGo8qQze9JzAoKF1Fx3i8f9Snz4yK8RMxKffLP1m2TfmoRAgFwpJKfgW1ToV1rbPXaGGCz3zwRBzSysDG7zcbh4",
  "key25": "4vgyX4BeEucWaTXTjEKU3PnsJKRthMaV4p3mqmF8h3amE6TuxZu3QEDZLSgLw9JSs2B6kiy1Ltt7PYcQHMV2EQxo",
  "key26": "56htq23HdywufQBqdXJiZUmE8u7CZ8FRnc9d9a349SuasW4RHFBNtTDatSda3ayjg58todiJrmmQQCbgmiNycYp3",
  "key27": "xAyVio5Cxg5vQhMQ2sfMB8McV49Xei5xgL9RURusgfEU3HZQCVB7aMF6rkbihqu3XbsJcusfezHVAp7PFVqSbGM",
  "key28": "3rtVDaC2mTofzicL2US8NiYdwkwv9CQvE3vB1ezcCxobGjPpJzdSTeN7R1CzCccNDbsXMGg6GWdMnDK4bfTu7fET",
  "key29": "2r5CsCtQSJGfbtH3ytQooTFc44jVmPDa7kXUSkfdAWnqurYynQTRxe42j5S3k7sBMfe2evoVHYVJJMRSYyLgphfq",
  "key30": "3xGMRtPkEcmYAsRkFxnQD7Rpmm6YL2BZHcXCPmrbhFZf4zm75LvMCMsTGLQbDWd7qNvtvBYEzPBVMijnkpsEuSLC",
  "key31": "3dGHSD64383ihapot7N3EmGv5dUxBMQ93Vz8ziUCCShfFwgCmo8H5fgkYj9mcSgUZejkf8NfrRFCWTcowagw1cQe",
  "key32": "YwJyjktd3Nfe95VpRyzPbD3cLiocURtHKoSjfyCbDACVkgEPmrzGvoyvgApoQMG1UPCczRrbmYy5f1N5pmPQfMp"
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
