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
    "47LoHvKWYu1k3LdUxDnLV9r6X56ZG3BuDbQGtgj4tFknNPji3LJHdWSgLUhZoqVtJpTftJ1eoiimE7mWDBdxFNjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vzdjj3qaYkkHYi1HSYSzhG3c1S57JnScn5xdDJGFMGNrr3ycBYbHx8GBM3av7hkwMXXLpw9gkoXdguRbekfe5fZ",
  "key1": "5z5bpyDyPo78ekBYewCTNtBY3KCPFwpGMPW4V9W99yjgbHuUKShrYV7gaLcGWy8ydJCdgxjudztFQPZx1sHie6YN",
  "key2": "2SeTQsMZzX9kMG1ieAm6jUXs5Pd4FauTBsNWHzTMH8z1Eb8HXMFvCcjFqBM2Gk1xB3CL326Y1R5KSKe9Scd14Z3R",
  "key3": "2Dbakd15qZKu7y4PJktrd3z8Aei8WDZTB7LuoD2w8LcEGuYeyq95DwVuii3A2HcaygYJsFqnxWdkRoDAXw3VWKzm",
  "key4": "2Kgx7U9k3Z9WvQndeS6uuZb44T76cxA3iazb9CN6sphpsjMzZoRxoxDq6D6r8RVToH2w9HxDDSXwe1Gnpwp19AGN",
  "key5": "4v89TCvjcSFjv5m8NTtsc8PRuL7R9oWi954z8h8QgUqYNHivtAjL1tPEy9fyshjWL877eSrsh2o85fdDFx6UoxEi",
  "key6": "4JLFwt9W4GWTzeuSJGgPxQF56ij1tUuF68usiW6vyXkZYLg9CncwuLgVaBaSCQh1yuZDTAK4DZUEqqYsFP71UwXA",
  "key7": "CLUA5RRc7KM3zot8Tz5VVxUQhEHEsZSVic6xGozev97b56cx9WMiiX57BqNpZJjbTQeqoxgqsseAQvr5yf2Fq7C",
  "key8": "GS8EL7Wyz5Gbz7bsR3kizEEKBnshJGUrB8QYYyU2Ge9jfdS7s48Ep71PJKhYqRmVDDQpczazs2dAPbU67zJ3bkf",
  "key9": "24uXAGPqWuhu8uX7hQXkm6NNZhXYpG9FNFPT69pb7PHpsMQKi1VKq2MNbGcraSZpgemGdUUG3J2iQi96BW6CLhfk",
  "key10": "PTtL1V5sn8vtqBXiRAEzpH8Fwc67MMQECWBzefg4cQjgApNhauhwSfEYQgzm6dt8tNEyY8ZQ45ZknPrgHP25iaG",
  "key11": "3myFejJxDWSUHXAYBYYDSBDWLdSmEX6pfZ5SpxToaqns4G8ngYgMYAxRvD5pGjzrmzAM9qQepoEkYkXvqzdBcorp",
  "key12": "3LdX1cUz8DD5TETZ74RLdZCes9Dtqz9BJTTyShnhgdoLM6CCsoJzUJnYDVcc2Lp4HGTVBu3QMQLPg2892iSeLYxQ",
  "key13": "4fkT9Yxj2Zo5VP5sk3Ekbk12zd6GoKRssvmeGNm7Z64dG6zSpARgMbckwiB6VRxfroCRWgNz83pTJDsJaxWRb5pU",
  "key14": "5pfQU6vjUBEMYjT2j3aLJpcrWNtSUQvuYkea56meUXUtRvLkf4vmhyrvwcqnBH5rxn98qvFGTYbxdAtaYUxe85Y1",
  "key15": "28tuZDpf2apLieumXTtA3ds43jmddLjFDjJ2mWkuBozwWTFt4My15g5MY9bitjGm2h8dmfyQLaxttP4KDN34NcGq",
  "key16": "64CsHYYU4B3Z1614zDBednaXothX8SVM3zfQanqLxKKrbzCJYPj9JdpdBXHgrFAKzXCKAayN4P5Ja9fZbQTZqj9T",
  "key17": "5hi41mRDamTtuRMmvCPGQovVR9kGbRbT4HEAomShHaDjeya9cRv14FNn1RmNe3XqhYHUyuvMNyTXDyzhcEuYJCfu",
  "key18": "RseTot19jusFodQmKrGKYmVQoJuCucQbZccHwkUfUjmNLdUtS5o7jPr6PEfXFAuiRtVfJtCkoTtAoHsr5EsjvfJ",
  "key19": "45xyPg2VWavuxfEe1RXHJnPbwGVFAgJ8njVJPEqEah3f1aUKnEF41tnmBp57vitcRpDz9vuivVJresKG1yWVBRHM",
  "key20": "3FE9ELQBZ3ReJAz7Wj5qQY67ZFRMcCv7Lr5jtbUa9wsT59yGC5NnrfLrUL8tVs52WixmWePMyAxbRR7zYzYKLXod",
  "key21": "h8ruyqych3Ryd9CtHgDuJymomiyrckvfbAi4toWXiw6tKMbDaoNjG4vRpTSCxL6TVf6zDANjfcjRGx9ftEs65Q7",
  "key22": "2dTgMJDe16wcD1aJkLnzxEkfyCtds1TpE7mbYkdw8LGjozLM3mQmqppytqTZ1rcRgJhKvYfxuC7M7Zr4HeM8gUZ8",
  "key23": "3o58PfcpvsCN2MXj899GcEMXp1rRRTyd2n3YkdqW3FQquqkF1GLsTgpr2Boj28NaPGKYmRyRhYsPrpb5r3eLUGRJ",
  "key24": "4wkas7ciwGLD9TDL4SFaH95hDiA1yj3ubai8zoyoWg4C7TTvBmH8q16XejfRMAyWJgD4C6VvCmvgkY2tabV3tvnp",
  "key25": "3DCcJeEFKiJTh8NDMQnbvBrZfFSwjSiBY7oacZgAv9VfgzjrAvD3rLqyKfNnAL64KskmP3G7JgWiKpS1yBad5AV1",
  "key26": "4QNF32s3wAgXAfs1mrWnBRbvyuVcu9MpszCa7U6zi7xbQp3k8mRYnnjfL2oe2mWiKfuGFp4B8ieFgNFskxutPimZ",
  "key27": "5aRVqnmjb9WL7faAcYZgmZ2b3Uba34RAELu5cLWND6WF9BEM5pXPTqucpz1ej15Mwm6qCnVqPMA75FpKZyZDBpvH",
  "key28": "4vnVatD7m9dFx4WsAtG4CKPewhsdbcjc6zbjcEuwpjHyVJbv8KzLX16J6tZH3BserBUqKrsKvDKAhdjCjwGyrRAb",
  "key29": "3TjPTxP5zCpfup8xkCcexBydnfQhKQaRoakowVz3HE7F2jubJP6go1KM9HQDEy5ZFykPYmvX9ePYXHr5mKhHPqy7"
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
