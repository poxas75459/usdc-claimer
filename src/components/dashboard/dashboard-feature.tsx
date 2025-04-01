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
    "2tgBWgpjhbPTWeCFHkrbRDXGCzfVPiGCjTjnjmxpJi8LzREktMc47eRuvKL2V3GkqMnxNHhovuQTZqScCLURSoKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Uws98ZiM5aHUxaPZdDEgZU3Twqt5HXjDjkHcBU8fzUZQfqD9EmCh36jqKtbp3wxDG2dH5FMhK3Jt9vDyYMSKTh",
  "key1": "3Su363zgTMG2fEQN9KmuphHePMXC3ypoiNBeSygPoeRodJk4o8QzRycePeNe2Rk8EcXjnQCTsTpw6ysC4dnbRyw9",
  "key2": "44sqtXmUADMUmzWnE4fom21r6APXBX44JG9TiRMRawDDvL53iq1eTpMGm492jAiEwfQyQJycXWSjui6wR4BBPCNv",
  "key3": "33QDVoxbZfGiFwfrTN4uq8je2NsHtceWk83A3AGodWKBNFTNAZBcEEbRF1GRgxAF5vb3aahqXzMEJE9qEZjK73jr",
  "key4": "2G3nHKckuYdmKyXQYKLYrvHdqEK1HgQ8MrHGAAnvCLseFaAc6pAcKUKKFK8JihYvrt6FeyqDUEPUQgK9mCouX61o",
  "key5": "2pg7EGTZxkm3sBPjXpMzvrRY98vg2eWBXWRJP6xNfyMDwNSZi87BH4DrpNXgephD4oHpKwatFQL4woXFbL3g8AJY",
  "key6": "4nGt5ehtuFwzb8UNgW1EESbNXiLXF3gXoy6otMP9uxmGYU2PgoJbkJL3CNdyPVCdrcJ2VevB9rQ8rM2x6NZKWj85",
  "key7": "aGB9TQkeMeHMFNWijyzfJE86gRtiNBrXabseK62M1gFsQK31BiM6CiAT9rwSmBLbaikLNbW1EHM8idZ9zUpfdAb",
  "key8": "3ZLCjyjsiBqT2gBqZq3grc394pbJL1eDMUgQVT3Pc5pbSDmXivf7ZP43mwnaY9n6X92XKGKf6P23CwZW4MmyEKRj",
  "key9": "2iCoEKDCBb8mDgQsJVDLjSXswVsieEovJCdLbFqLW667YPXknibrTzRAc1UVczAz2wQy56o3S2dPSBUT9dyaPbRC",
  "key10": "4mDxcCDmJfbs73EurLjRAkaYWGx6FNiEYZHWy3QwEoUHmKDHCiAz4uhv6qXRVbiEB4Qr9THBYP1FLa3oFGRooqx8",
  "key11": "41AGBv7pJhqqJd9eCuMioKAzhBvjizwB5BnR5dPRUP5C68q2xW3qaJ2hUCenXmkFXzYvcCyG4mWQE1gei55eFjiJ",
  "key12": "5TP1JaDvvRsKTXwUqQN1jqxTRStNtHDZsK1doUb4qaPgJYdgGLFN1tRh3vvYrTbS4ffzeQS1XYswCr1PS1oi76nR",
  "key13": "4c41zh4bMHmhuioN1amoQDH8mmv2pfZQpxtTUwn7D7ykW1EcTmnySiy7uDqfcmgpqLAy5U4DiAArDeaokmBxgdTh",
  "key14": "2xTJqJyPqHAkV6eMNfu2vh87YbYMkRVP5Wz67vVGGb7oKFfRYSKQEnq1yo3aTjdtSURvBEd88Rav13xopyYnCGyH",
  "key15": "5e2VZrwSEFmhQaUpRxVULoTwJ9p2GrRuiasp6FXJrbSYSq2bsafS4oVoFfgbqu1sroQfy5zduK2XDBqU9hr8YVxz",
  "key16": "5p336YRNfEWF1tN2wQNsAwbB75vdHy9Ea11JmhwLGGoxjxkBqtSL5VtKGCmMbUsDA7ZCjo9qgtaFwFS4jHfLEDWm",
  "key17": "b5TPM4VxPyYBSCJBwHdTLm4NJ2rnZU1AU5QckMFuTWRa279oDxZD1mxsbFqnQdUSfTK8b1s8RT7w3VPFhXc5zAG",
  "key18": "2mUEzAfweGQ33dMcrJejMAotvTmQ6MvkqeEsV8bbA7a3s2xPTYvLRpVQPv61kL1hMxKDxucJoNTdGRS9fRfunRCP",
  "key19": "3vqJy2HoNfL9RXVg9oyCtRhmfG6siDtywSGjDhLs3AFTtBHYt6B19L7DcLfigxutM5eQcRVoVFudbb5oPmWEamjv",
  "key20": "3PkHNQKuwKwm75n9Q5ZgMVF8NwLN6dgnRVc2QVpCcWHbFf1FBQLj8rvfn9D8Tcc2amxDiuTyPHYQmsruFeRnCFT8",
  "key21": "KrmhFNP5LcN4JyyLiWbsMyV2cE2xN2wKmrBVBYCpXLxkBBQoGLZbQoSgMZqSwGQUPSyfas5cM5ZRAY9cpehak5i",
  "key22": "3ZGyXFRmKg6jbkSt8Zsvru6ER3zebuYSHMs2qYDQXAHEH9qViKa79p76FEg1c9j5UCKixLFh6VJCN3YbV87KL1ey",
  "key23": "3t3VfpTEZeHBCtPW4283dH1EKFZApJC8XjN4aSHZhmDeRzfEiijMfH77ztJHMR7weE3gQsZmmvqEnfNcDvPH4NPv",
  "key24": "zpLJCL5Nagt9zFhbjkP4yvkGbkF5J6Sg72gKdHucvVUSKxvUK5hzpNgpekZ8fNDND51RqHTMcLyiMDvuUeW5vbM",
  "key25": "fp3aCYiJu3yHv4fBnoyJnzMmxdb2Lcyf7vhEqMNa5k4FpZPL3eEJuPr4EA73RQBcqKzQStCVVBHviYJYAcnKBty",
  "key26": "YR7YaUs26PGCdASRVdPpfEeQtKiPKCEBLxExqfnyqEaJrdP4VwGTvsQaPgtQnXYnkY9uVXaLz54re4LewDPQMa2",
  "key27": "N3cUVfLMohj8QSydbKZTp5NJ5JeneZFX6daPpL4FznmbTnY2SHpJqFHEgGbEword3FbWHs55FXhQf6KB5SsAxFv",
  "key28": "346euUXUmvZZ1oSWz1YaT2obbUvT9ALZSdMg949jWMdUMyNxReb6zaMTpA4tbUvqfvbiqS1U6z365CWkWYFKACqm",
  "key29": "5MEUb22qYwZc3b1YEwxX21WCaUxkgGmP7MmEhMJJQtUhfG1txMXECwUVaowASSsdE8CRe474ngutw6UxXKsucs8P",
  "key30": "2PfkRLBm2bEzj8P4G9AAVGV5KmDRA1a7TBo7HJGudj6f2tRx9L2giZoKaySdo2z3VbaUJhSxCWTLy5C86a2NNMuJ",
  "key31": "4mjBKzKqMX7Q6z6BLK9oZQARzpxiBnXBSPd3zhcK8sri3RGgYM9eLw8E7RggyfFox2PBa3kZEkg2EueX3YL5weKC",
  "key32": "4ywoqRtS4BovdttwFCYnhEwX12dSs5cw1oX1MPYipJs76UsEDWnRPv3sDWhED5UVgct4tpe6vyE7yWqB2Eupy3RP",
  "key33": "4PgRL3TXcuhRbEy7p9s4jNkrGiUVArkGfW6574A5PP151UKUmnbUuUKSCvbAnFdZB3r2UpvGZTSquRzj2eNqgDsi",
  "key34": "2Wmf8YDdkYEfTvHLfCiv7CJdpH362owLLHSJZ1tbdsbgFXCuNxeGZvVNtvJ57avk6jgmpoP8s1t7rwHJStBuQoXG"
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
