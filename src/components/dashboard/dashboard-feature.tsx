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
    "2rP31KnKaj1KrXGc4VKAcQPqDzpvKoqZNiovS8rLq9NXjo9wWKgPXGQY4VKRCg8bNWPe5A9sdFpxDHVAY5Fp25ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a56Z7BZFrQA3Rt5HHR5HQg6SodAh3pd7LpS3ogzt8HGbXo4HXYEcVTB4paVMC79Y9cofFygnvZYkFb9Jw8dFYeb",
  "key1": "xBBnsMKCYzQtm98hP5FGgNEMcC6CsLcbAkGjPdBpDPwMAYwNG2th4a6NM751xm7i458dnwngL3BmJ7yMA8kqenU",
  "key2": "u975q4YGi3z1kAg882RDDizeNrWt4xazw1kvCi6pQaHoToxYWR9fnkwYn6GRxzKxuagsq78KYM6PKDQVNUFHekx",
  "key3": "eJyJZeZbUhK8GqJHVGXjqCEp9CeZHJfMxFnWwAWrUpmPUVhdPToWCCZ2aEnCWGYQeCc6S9ARmoSPQUBsMuMGufZ",
  "key4": "3PhP1jXr2XxPhUoN6eYP1VnnpZkxcVe3Soe1LXmjbQGeB5wALWzLZn1NSm4psXBB3pDY96naQdUavDa83SdRJ9VK",
  "key5": "fCKQgNSW21psJa6nZThcTP8AS7XXqfoezaxEkynoZSezmviiPt8HJ38qkj8kdGmT1rcayHbbuDwYjXTyUEJ7ERF",
  "key6": "DDpnwA3wvdjj6ZnGCFDkJdtwRgEWthA63tyEbtiDmsCNDacPWDptufiTctiKA1ujgqCnAiHDYFurZCNhPZk2fqY",
  "key7": "23BEXHNiqNcZPMaFf3h8VoPHRGdgp6tzxYrurnDSPXXB9rKnCXVnjSoysbAprLa2KsfozzmQttiN1H67GC6ZWGX5",
  "key8": "55axJRBCvbD16GiFNmofbKkYJDP93hQKCLn1sjvKTbFiZ1k6BhtJP8GmNobbucykpnm7kFyjB1RCuJ5AkDXWRj5D",
  "key9": "3rFfnpigTRP5GCApsfnzRr3t8yXkd5LaE9u8mcBphvfRik8fZXeD84MFWMFhm5JkH5ja6YFQr513cjBqHLmpt27R",
  "key10": "2U8sh76bFtKxmoUsZFfspepfG48LPgfa6QD6XAMjusoiTZqNFQgL2NG9a2fdagCEgiijbnHEoKzYEq4VoyN6zH65",
  "key11": "3v3LyR9py31BvowgLeM5sEukFbPY5NZ76oSwza5cqBb7KVUn7iYunPRoxk2XYRsWtrMxeUzMhigShdZgizDdei4b",
  "key12": "4Qw43RVqgrYSNBsh9JQFywt6zhwsU24EYK37HCudHdokSDeqRBLYjkX68o3ynEzXU7ddWTpBcanXMwsXmaJGFHS1",
  "key13": "3Rp2X2nDu5ZM3A5hBAh6Xi9BhVPL5VqKMZ8bLhTUuuVy789nXZR2VwzhQTh21onuPptuzGx9KcF3aefv85ivBUwE",
  "key14": "2uUyy6gz3HTTnLi1HMaQvANRYXr5FaWEPYHPfXTtLo1rGD8LbmuaBDasd9CPMLaScHU7U43GcY94u3YccJXgp9gf",
  "key15": "4UULKyiCCQwA1upi1mPk6fzS2PWzSv2Dwptm36zy9cL7NwFNpakv5mSApjUvqAvVPLMp9i1wrpeCbx3LcmSfHag3",
  "key16": "386BsALGwHbkHWQjEGqqfPfFbJk6rhKS3YBLyL2UEL9MKTmYtxMz7RcSgVfq1tT1FME8ZmHW4BEFnV4BQMkYasCk",
  "key17": "2BmawPMAR4GFYAZgYKMdRVnuw1QH9Y3MjMqZzKFBgJcpBtM7GbKyYNUkqtm34SADQhCdp2kKhaBv7TVLcjzQJFTs",
  "key18": "4wV7rxWECzjPrWfRvP2vXEFpJJwHXaVKTda56uAciu1w9dBdB3iYMiWjbQa3Xa7oBa19mXZByRZw3VcK4pGfGSAD",
  "key19": "64R5NR4cNch8HhUPRxjdoatmpD8BWk3ugTNhL55PgMrqerRUgHcEXJExAjRC6Ax3tLTY8vCufGjZpAgGDTCrWkR9",
  "key20": "2Cs52byyyXmR2NZm2ScWBHvraZDU3a5gv6xDQbtVGkNfWV6H4duFdrwPa48P2DPygXr3UcddpbQfaMMecRTdvjWf",
  "key21": "3RffmddMUtBbFNt56kQPH4LPRpfNfP6hMFWjfzUUNcqap6f6U23RD9JfM8sQF3N2Hzm5oXxqGFRE4gkUEzU7d1AH",
  "key22": "4qxefW58Z8sZXpA1ghnYerBujkQmghm1foNEFpUw3FeHXqjcDAH3ecAaY1fyxUBLR8T1o2gUU52eNQfjj6NtrCP5",
  "key23": "3Juj6om11XPWxHx7jdkXvBRKqpufQFxBjuYTxvWr7oxzMBPqKgMFqLZdko5Vhv8vZBr99jY3CdTesShw8p58b88U",
  "key24": "8s7Sy3d4iNhXrNjD352sLe8p7UXFeotJisfVCZT1DsfCPYS1XZoX2CyhdzobT6hGnsLu6XXEeyv2FcLjVFuHofr",
  "key25": "3wsAJzFBAmNwDQkE1NfTR8qn5EXLxcoXskBnrxPyZb547bJbagH7QGXV6XQoAdiR5X7wNKmNpYtnUDRiEyYdmV3R",
  "key26": "3iPDfQkuSyx3TCSFjCQp2HAZPnDLBjXb1pBNKbSdyLxdEtrGDRUKc3Sb3HW9wY81t3hhopzG1MhihkjKL8pQKJPb",
  "key27": "Jn4h5FCvMjxMHfb6ofQv5rSBXkpSW1ik3qpXhuF3gPypMhqBkAjuKM4qryshuhw8f79mbsAP3GkqkCvehMhwJXm",
  "key28": "65e4hPx9qpLGkpqVcgRjyiAvgp1gUJpj9QmBHzG7q7wZmNks3RUV3366SgqYjVL2N2i3CYQcLGscJTPJVaKG97vo",
  "key29": "eLcFPY35qMRFMFtccn2G1GYZoberouuR9YeR9k91bEiMxx1pZKmcR8YH2mR8e46jubW6tiv8tqHsD8MQ4AGJRHk",
  "key30": "4JssgTUevpQWCbwqVCgPKE3aUeypqSB6oK5C32cpHnX5pUQLV7gPxdV3iTWKHicPGEy32nVZSQHYdA4rbbKjGbDq",
  "key31": "5hE27oAkUPqShC1pbKRwiFunWsNv5yHWVcywigmC8x1w17jgwMs4Y2GaRcxZ1BbbzwmPgXUb4rZwrMqV3WmpLfga",
  "key32": "sedLuCk59cijQktca91wjQdtMQNfeDKiz6nwmxnZq8s9t7dhH7yQk7HeQrHQWs7afavVJyCGVv2qHR818LffeEw",
  "key33": "2WcWD4CrQKjDjzYj2yTKueBGPzZwnGDzEkNW9SKvMCKjud1V5uhMEedrtWGivN5rcVmgVX2LysAMnGsQCwobFq8P",
  "key34": "4oCpwgV4WcFCBhVFMcRnHrXK7fyDYM9bTrNK8AuPJyRqnc8kV8cwjJkU6UafTxochquXtnpRHdaAP6d4NVLWrHGC",
  "key35": "4ddnbJJtCCEfKfy33gSp819zSWoA4By8RB7MUPhpG6YZxzDovvwf4kBzQv1CJdJMnHM3scQARERonzktagcaSBvE",
  "key36": "4GUsx3ZUEhic97iqcZeX5RZnuJRL1GwBhrhSXMQtfLz5qD64xfyoNX4ajNYmVP8qWgw6cywHe9Jcwkw6Stak1khQ",
  "key37": "45WRzsz9rcZyqyhD77kDzpApRcAPD68D8AYPruXwrvAt6AARScq8gvSNf13xeXN2tf6yCSD5AijzXY6CVuoynAio",
  "key38": "2E1duFG56E9dw8G8o2J38ni7Atbyxt6vCoTXksQFt5GWwKwgH2epcFf61bCv6fEQ9kKR4uJscpCv6HZxKm1WjRUW",
  "key39": "djeRcneo54E7KXUc1Vvuz3ZJS5Hyk4vi6RM6Wx183ra5uft5xTtbLjEisDNbBh566ACGFPShxoYXB1zFqvyN6M3",
  "key40": "5QDMUP2saKzLnKJL5tnAWRjNfJUZsiAYGWvNCf3fq4bEJ7dbAonX6wyCtYk1N1qwK657HPSRQtViNCyhMrRJSMek",
  "key41": "4RiAB48o7WY4NHYBJQPr3qTyMMWXi3BvY2oY49EYzCbE97Xr4gu9bfqibF1azeceTZ7N1gLbannFXq7UYxBTWyoW",
  "key42": "67HAMpzNmGb3KXVBdd4aJxosbQCQmezSwPCKGBSchk4bYDdc656MpGHwiPzvL1PFg2CnmAnqDwGnbmi2j6J9jvmb",
  "key43": "4CWzMiAkpkQp66r557wKRnRKXuApVtXdzaqyXkiVuQz9szPap2QFeth3f34LuzQ6qubpFbqXm995XvvBTUx3Mnmw",
  "key44": "scDcH91B1bmtDhK6HG2vr8JnKg5A3eRAnqueZsACrEkSgLXAECbHpSeAXjPSjhLNCFKKNNYsYCwV9cg4aiFddyt",
  "key45": "58mkW9cCSkHh6vbyCv9JEayagcDgGdpPzNbPmZRbGv5W8xMdweiYcXvztTAacsQGzFgga6wtu6hNTQbHHQkAvDN7",
  "key46": "36TJeQpCNjMiuoA2ibjYP558rG54pS5KWEZTgwNmmm5BQjuTL2iuTE8RQY68r2vQzcLemUy6RupJn8AreWQgcMDY",
  "key47": "S5ukWcmupWZiFyYnaMoqsqWonQVALc8iCK4o6dnjC1UZTi1mbAtGdbThfmdfN5wTwa2ncDAnRzxLCVfd7WkyhkY",
  "key48": "4dDefXk1EY28EKyRc2LP45Rgr2kSPL6a4EpmLN3TGH5SCK68HRcckiNqVWiRUanCmbN7XCU1SW9MehF7RvwA9pjX",
  "key49": "JTZWXCVXTqasMzKNFAEeFMmeNL19UKkxZiMXf8Ne3RULHuBcVJ8SaCNZ5yzvkFwSqsBqwaymKiqNaynj1dgknfw"
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
