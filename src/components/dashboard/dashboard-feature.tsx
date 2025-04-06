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
    "3eoiS8pFmVAmVqzYSe93uk5eG62QZS99kiquNTcfYAqX4bGhjvxixLQjV5YKGj3W7qpAq1BN6jEyQv5xFT3mNeUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KcMVrKZbVCgRaieZpPELPv8igk8JZhakfkrJzxVg52Wj7Z6hyUZ4MwtPzeygEjxEeicbM3DaAc8iDE7zqXRouZc",
  "key1": "JWJEoXyavxGmZxsSstsTqj58GcfKdLQRCpibs4GN98MGx3rtRmmQ49C1ywGshf897ktiBiwqr92if88XkqtVLo4",
  "key2": "4LTvrzyhqivUHCFLqJnwMmrDVFZMJ9KW8R4eUv9uFSHEZ5DPhfTmjUGgUX6fRErSxjU1r4ZXYRDKrHDMGapCNHEv",
  "key3": "27qEdZh86D2SXbbo46nz8kbA222r4hUM27cPSM2QkvxPsivztbigY1mZDbbGdg5uwoiPbnWYaCD32GgeFLiTZcuy",
  "key4": "3xJ1Q8rCgTzSLLMZMT9FVNDmHeYZTjrDnAZByjaStQ56rnJD2yx8SBb7DJd9D2FvFNXigGTi6EdfePLTSP1R4iUQ",
  "key5": "5EcMDtyLCJKiNQ6jYGz6CGzEgsEF7io5hDk5h7aEZoH6pfAc8iJwVHjrVopqWXx7uxDCRS9Yb8aW7EKuWevRd1J4",
  "key6": "4EcjeKVKmTKPFe8UAJAEdWYkyyjgK8m8ygexE1YWq94FB4o9JXVKBJihNrmtdLkqdWSCc3J8vkMvUF8ZSopQPukc",
  "key7": "3e2jgcBcA5hjSJGYgbc3uetwvFmwXmFaJ2FKEB3V3uZZoS81dbTXqEegBDa5GHCc92J5opnfihBiVnZs5JQvhSht",
  "key8": "5Zeuav3VmjKGThWauC66Qf9eukRiNrfpjo53UMo4tU5juyrBmsgtH2843DAGAF4ksZrLgthg1qunQNU1HcBAoMsY",
  "key9": "2j661xAqG5kJi5FbqzkFPjLDajt9bEWHRewvgqyTRDNdXbieF5CGgoZdMHS73qkgQEpgd4bZLiiPFzAjPo4qAYKx",
  "key10": "2yi1Yofr4q1i49ny38uW4TobgmtS63h3p8GT494pDgiTeWRFYoq98XoRW3sUZRBeqwBDTtPd3v2fpwmUmY2PKRU",
  "key11": "43W2BAkF2G1hMFbUfECR2AKzwXDmJxaphoZLmP5o3GJTQxcLYzABzcjepYskhvbP3TQZSAB3RAbaKdwVeVHvbAcB",
  "key12": "43djUuu2q8XXcNQkDs2FW5o86KKRii2MBWiHJAPgbbKvYVEzvsuZYC3DoTHwsALMNhiNYhzXeBXdSnCUHYQm7raW",
  "key13": "X47sn3LQEkndqvBZ5ABVvEuDwMQKgFA67fso8jJ1UPcfkTXPxDvypSDBdqEJBMQtaVzvmUKffGSb9McE6zh7Cf6",
  "key14": "2SwkSWGuhV6tnpdQvUjAULkvzLrqbUCGjvw4JaU7XTHzdXjuz299AMUDsedXTEbiB7MbvWf79kLRx625b1dmC1fv",
  "key15": "3dykcrnYzcBn2GEyUnCurNd1TunTVr6P4KZaBbUMgUQWkMaTFcQjef6eB3UMypQSzHFP7JPDiJbwa73pwPNCE9wL",
  "key16": "NrLNGxYGFqrXmLTQTtVZ4Mikj2RXc4P9G5znftqAKxeYM1DxRgnWFgTdNsV6LHFH49Ap3jcP5NCpMzforq2KGuW",
  "key17": "Crk7x18JHvuyihWrEMvJtSBHboCtq8WA41kayAFw6BXiFpUrYFvGAPRfA1DHHsgKYkXwhtraxqASNumncBtJ6SL",
  "key18": "2aFeo1eCN53BS7VHEDrKMmvYYujEKn4LjYX8iNRS1sSERCLhooo3Tk3Cbi6942W7dxHWwk3ZkKzUJMkyeXPL4k38",
  "key19": "5NhAwTC4dPExjQBhJWn74DVx4UF2opTcR6SUwbvWaC1KXQhpMQs4gx6rJLhFtzxv4KAAqvNhSJwocqNrZ489Atao",
  "key20": "5tQeFxQbVCPsQPS5QP823w59ewrg2UthK8Hb3kKsJvMbf4ghGLMUsJoEhuCq9qZdi8DH3DCLNZ7m9bGWPV91ja37",
  "key21": "pHBtrda2AeSwLHEX7bVHSqtWpm69GGwpUpd9eHNpdFSZwexwwLngRKeu9iAaSS11bd1wBXYoydZBUkS2tLLL3mk",
  "key22": "2PEyqaiA16WGAhJmDqwCM632sUM1yVUqgYZYy7jNQ1xPSLqxkeRCTqdNQ3BfYYVQ2bFDKRkw8qAP2TytAWCk9C6Y",
  "key23": "2QhPPRRAzv9TgRUphSU8QYo1NmjfCgwzbCqhuEq6kLintV58Gu4KY5PHR6XWP3KYmEC7CRied98vgenLDECJPngm",
  "key24": "28c3Pfs3HbV13JJ2cf2iHVqEGc1SDwshkQ3dGjF7L6SFkeZHMg6uX8atoMkGc5sP1P4fm34gTE21CQJEZPMdaHJK",
  "key25": "64s1utxcPRih3QewDdYKQu7pnfTkHrnqC1kD5kaWJHYTtSv3Vw7m8eUf8Zg94mUqFHxpaYgrmeubCdA3bNPoGAmy",
  "key26": "27eFHpBkQKuQwSDrVqMHuaazZ5NT8dw3EuUZcpFS6tNRW7K3yyqbxw29Rj1uMhr5hGxKmR6qPxT987R46ME5osdN",
  "key27": "4ncu7WZfrVsfWntPRRq9N1ojWeXRdmEsdsMi6RdCqQEG4P3NnAxuy8CXfvvTp86GLk3x4TYHxBreKaGurahGtMmN",
  "key28": "9k7hVyiJa21hB9ChNZV1NWp6F7bpPrZTsQUwtsyXSCqRKJo9Yj6VESYKQmuwoHj3BseWAiKn5mwwTy6EuZjK3ki",
  "key29": "37tzh9SW5hpdRUaAgbsH2NuM4DEP65nGb3VhdqzRy9krKa3aaW7GRPmbEMNKEFjB6QP6Le49dLJFSqbQ68HYvL1A",
  "key30": "5WgvXLCGpVWzaweWQUy9FvzX7CjfQCKT2KfysnJ5ebhZGE7EBsymYFMMD7FFouzcew6xJUM4sPBGdJyzxUJkCuFd",
  "key31": "44rUrVPimUjeEKfrAkk6UNFwsfqErFvY9eauootopSBDzKM13WJeVFoN8CyDwbejrztkgvCk9WeAsTygR422h7Hk",
  "key32": "hguPzmW7KwUM179ejzzN4k7huvma6LrhpLxK22gR6ws6wAjwjRswEvKg8RdTvaGMfKTMD6ViyPKALkFSg7WvZ7G",
  "key33": "3PCda1xvdNt7JRCRJNVgBdtNVjJieZSMwqfER7ogEgm66cHsPPz2dh7du7oS84h5mTxhc5uFQ9zU23e3csV7zf5c",
  "key34": "31CPYYePFYYJPi9ttYmNa2ox8dPMPXhu9n2jR132xokh6SznCPavVhBkKFr45X27bW6dGfJo8UHzESed95ys8K8d",
  "key35": "3aanVBm6LG5uqMHuKZ9xgnqgknUJYsK72cvwG5AnYRZfAutzZApC5RNkKiJRYnVrcAbyE3zXdDPiqGYGwsyh9Pu9",
  "key36": "L3ASvSpQP7phEVvqzMg3NhfWC59ggHK7Y9i9KcPsbjoWd2ZQ7VRM15nZu9jXHkf82B3Dkq8BenQMgh3jcGwba1H",
  "key37": "4xTzypq7FBLm9re1NR2HPQPS6HiPBUewoDERPjbzvtsYbgmsmrdivbmprXMZtsEAaa5pRN7ADVGYpJX7PHbCVxT5",
  "key38": "3itFBKfHsiMrEAwm9V3Le1sXVCbykvQb7ENsdeZEHaxjHJHgCzwqAMRbpXakBMTbD4Pmx3G7oz6DBh8WDn2Av9nZ",
  "key39": "2ebZ8mFsbyLDhUajpfWXodYDSzDYb6AWPKdeLENk555m4q6YVEjzBZgbCKBEu7jn6J38NHWjkUQ9zUD6okQv4usD",
  "key40": "4fRiGBoG2aWuMeJJs2kMESea4UNGwvRf1G9oXzGUfjRWzVgMHNM1hw4g1Da6N88tvVB88bSRpDU6Qd2XVuwiUvYm",
  "key41": "YMw9YXeXqUN51i1ZLaeUJq2FbJEnChALScDT23kvGcFSqdifbdo5eVtDyvYgfTnK7JuCH71pwG11HtWvDY5M5wn",
  "key42": "3hruDG4t4DAaWyECh836K8x7NB8Ns9WiJb4wFsqS3MVoJYXkJ9sS4TWtimb6zjbx1qo4awTNrUBN52rrsbW6qCJh",
  "key43": "3CA9ZokSHpbwRTALTMMwBsY1ZGpY3dAsfN5kSMHeJekhThzEudFAGhGuViXARfVjFSkxPe1zq3PAonCayFPx5Arr"
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
