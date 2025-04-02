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
    "5yZDDBLBJzNvSHJmsMCvAvycZ9UdA3NqhLZvMRASMFNiAMJaL1VZk7sgKS3xKH6GxrTtiQCBBFV42Q4835KxP2Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTyzKS3SFmoUKRWwTRcezWTg8GgxyyXKUzceScrLdkiFk5Fu3wLMh9VZTHsZgx4wWXRL3ofTDxiRzEHQDXCPMT3",
  "key1": "4upwiprrgkLhpdCP3jhejSFD3CcR7t6xxTbrcV2boEYe3n1R7dxTgUzLfSrCxSVpAmhUUek6Ub3K23LpkPD5fcna",
  "key2": "3gUezaGA62HKBhtQcBwkYpsnybB6h4verLbEVu6F5n72nbQsfk6kH1f5xu2ebt5NNzzjAUhQT27oii1Y3E7dKmPk",
  "key3": "23k87SNZfupqCqbM8hj6ePufnuL7BVepnfjGZJoG3sJs5uLHGFEnxg7kb962f1TroAXn9E6e5kuSG8qqztMjVYA4",
  "key4": "525WYNmjwDiUcw47zHyNVXiaBbTK7AxyJrkuyjVNhunomQCz59xq4eKauGfhPEW25zfJvb17nTctk2FQGKJYSKp8",
  "key5": "4reaZnTTz67UEFt1T8cBPzrzv63soU25xvMpLkkqYxeVpSnkLxEg1mDASsQnB9dKk7Feqzg7BUQ4zuyLJaBPuW32",
  "key6": "3bdYzhp7ZkXtmjKo41KRDszX3DiaHGYjaPEbd6pijNqj7kgMUC2aSvjwBUrRVRTUETB3ko97u4K41SLAR1UF21wn",
  "key7": "21ABk7o8sxPGdMWDrbuahT8vJ4LQ5g31zbeBnGjhEspozJ3UNiUst9UqnpV8vEqzugdSUN3jfA33zMDYTTK6qcja",
  "key8": "3uMxzKXEcTZ3bdR5dzRzkWmZcZALoCfwL7arVpxYNA6vueLpiWK6Zvq97a4Qiy6BPM82aeBpLYV7gn6J5b3ng8PE",
  "key9": "4ndf1MS11aV8mxyksh8aU3jnXJjKXnbvHypPw82whykj7x5h79iNbVw4fQARbzY9Bihta7MXiv3S9XpQ2JREdgxV",
  "key10": "mnzkPnfcYwLuhX32AcWboaxUf9MY2j9opy1YsspzBmNuVboWGikR3pe1hHoVxk7JdUr4HQttvVAiV8wEknRk8vj",
  "key11": "4REPnvVcW9TY9RR7adBtCENP1yquJ7mATWhDuowtwV7fYJvKpEbQWFiB9iredFCcL9ET8f8LuiPsHQzneDvoWj8v",
  "key12": "4VLxFQ94T8KA6fsD8pzcyfMY5x7TYGEz8G5SmBbhe9xQLw3az5qHVqgSoaK54QASFY4WS4KiZKi9aqpG2HEMEVPp",
  "key13": "5LSim5hGwtLdQEnqPtvhZUAUg14MaqX1N34b9DpLXy8WLFuqB9hcgogr72dArVRiwobssH1rDXZyuGvycuKDG478",
  "key14": "5wsbWyB25GzaNLPEZBKSDguTi1425GJ5kJ6fwFeNwhDKroyLQ1sHGHz76PJEDo88ZHHawZZWh5XBBJoW1FnRK1D8",
  "key15": "5nC8yCafy3TuL2jY6Gy6PVeWYGAW3wNa7AmgZAWfakDJ4EU8io3VwqcDyXDCh21Ms67bHKLfphPmNbhB9uDA35KP",
  "key16": "3RaiipZJR7is6TSbDrP59v6WPk4DanyNXGNhF9czCbfFJ2L7HmPTYcuLU57qsC7Av7cWFDLW36nvvNmHYsam1U4Q",
  "key17": "5NwtCRBAupRKF187bP99PNc1y3NhUF3zJ7BFR1acryAtLSFtXPJD2Cbx6rKfe89pjCSxrAPJ7MfN64VMdHPiKuhw",
  "key18": "pvrHAZAcPuWaZgredK7uzQdPDA4MgCtJ5e829L8pWUTMvR3oXhFRtdJ7XHbJWy9Ff8AcXPqfdy6kVPcLp7pi8r9",
  "key19": "59DCdVdPmAbkMRedrsDkidwnhTh3iqfYgpGem8yKANj2hgQZ4JwmFaSYGCPfRB6izte96GiDVPmrXZU5RZDFANsz",
  "key20": "zg8ckkFLBWommtLitweqSNFASogSG1dayhqgp6JCNrRzqvdcPM6ymUBtVnyLaqS9c4hgw6TC8yMBoMFpdMycmGw",
  "key21": "5qCrxdvXxvhWzfF8jWrLARE25DJ2i1WVW5nqoJtBT8FQroT7xzqdVue8QKiL6jaQFrLmsC7zaeHSCET7J81zdqfH",
  "key22": "267oKzxce8CrU3R29azWXEcfALVpTtJY1NkPdGm2PSMH53bryFSVUvFt96uUnCKv3Hcq493odCP2pef98DbixtbP",
  "key23": "yBWSn2Q1Z2KkL9B4G3QQFLynWQod5vo1AfCyNRMrNF85ubg6WrDcKqNosj23Hcf3BGEM3mAgNWD8g38aJaSnQWD",
  "key24": "59EdAfop4Pa4AaUUiqL73agTuuVhfxipD19XsA8Bx5ZqjbVzFQ1VmVTsajYbS15TSa7DckYCJo4j9wKi1XfJEHyZ",
  "key25": "2ECqzyvmb6BftgXCLrYqm2doPtmRv51dTV7HxcSsAZDVFCze6eRTR6rUNXNEn9Zb9yru6uftiZpcfdwqEL6RTDzL",
  "key26": "2typzqn8nVac4qeHecJv234hPH9rHqfRxzzhZ1ne9HTaSLWn22CjZK8T23kH2oXrE5VwiZ62uHR4cxDiEjU6DaF7",
  "key27": "2P6Xx2st5qNoRMJbeGSYGdSiBeCMMBDo5XszCkuYWbv1ResDEfmL7w5ts1VTSrC98b12u5btG6Mr5Qo2Lw93E2ty",
  "key28": "2tR5V7NKysZpLWWHs7Xm2Jk5KbYZczQsf4hagbuKP9N3TNmsAAkPG4bnuFqqptXajeVDGqLDxFk8USy2LuKc6bnD",
  "key29": "37Lg6muXzays29j9MeeqGBzFi9JuCFnKfDWAhBAjPxtRmPz1cyQHbJYhdLd6KsaLNRF4DqQ9ZznNrvQSLFMGN6qZ",
  "key30": "2eL8vYJPfnfRcBbhQhUNcgZCYcnQj28ik2M3F11qbAjATkmc42quwkDg3jKzx9fdEaCZmQnKJ5ADi6L1q9g4o4nL",
  "key31": "2Cfx3ED532FXw29gm4HZyJL2zTpp1t7A2S6EkRNLrXM4L813FLuejgQFF37PHenhwSNUDd1qZ7j6JmWsVFBUvtUr",
  "key32": "2xJHX1QspXyoQ9VHtyYRxMtEPJpSwt34w1yZTCdtj6jZ8jWqEraS3z8jLEbnWJuaTsEd8UmZyXAE3qacEQ1a6h3d",
  "key33": "2QpPZ1HD6EwrG6Tqogbm7kRDFDobQvbpbijru9bTgVcxD3E8Gg5TSjP5riJv9GSULiHGWJjvEnZbiKpuAPrGGGCY",
  "key34": "3TcWBNTFbVL7Qvi5WRYqC5iBDJJY7Dcy93SW2u2rAmUaJaNoNiHc1i6oV7bVirVWtZ44NnrhTEFLoDT9kGqQWVZ4",
  "key35": "5pGxPsFRfwdb5iuAr5ndsp8SRhE9gQTatyQMvY8rxxJ4wpqUUbKHopAXa9SzueEzXJTJBCted3qggiGw6m7aomCX",
  "key36": "59Kca57SzAUeoK61dULuLWKiMtg7TkqUh9NNSN7jbMs17KPvnMASG1br9MHWUKJwDZedd1MHC8iCG5Fss5Ak5Ycp",
  "key37": "kUwiJqQ4UMei12UZvXd1egDnJSsf64nk6jAc7YNBQDm8sQSwjoXuZ4AU5wDYZTiV4A8fes8sGuy5t4VGnEjkZ2w"
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
