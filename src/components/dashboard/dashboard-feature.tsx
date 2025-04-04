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
    "2iRdbaMr8w233RhGcWme4sF4gbd2a3xm1DAvDhcxJcim2aew9PhsPu9bLTeveZGtSGgi4BmawtqZEWSi3a1iePvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KKcrcvF1sJPhJtkciXx2f8VvqrwwWQtQSf6rF9GcLqq1jTQDaCpupi2UKBTkDFyn7eD6JLxXZjUX8Qiawmg5oD",
  "key1": "ntSnDNYTfXAatfvogTseCGWyfYoAyADHqrGpd3LnYoEKiCLrbxLPLL75SsDN2L1981aFdvnqz1HQGrdQXkczqoA",
  "key2": "bXTe5dk3upvJ16hygwWbJkQDt81JAafrzCZvfpAtm1pJLuVzbehDXHr5MdW5H1h4aRWSgXxBwjWFR1QC1ZbGNyt",
  "key3": "4pRQsp5L4CetAS5hNXMZMRqCEGX68H2du3iutYBDLFwLHVN2foAoQMxk1uwpToJjgsAFNUV8RGTW2iH9d4vkuTsc",
  "key4": "49osbgXSZsrxgTsx9PNawfpzCQFt2kCNbHfSjxcGuq3HD15DXDXGvDXGvu4x6m2aEiDfoTgNycNdAQpcEQcKc4HP",
  "key5": "4aVJFbgi92weoh3nCjniqV68ShTM6KM3DeHbh1qYB6mDMTDxnbq375ET2ZDpBiPhbhGWnJPB1Ftp7ShPVtZyjNh3",
  "key6": "3SRpMXz6KNN69PcqUgEBLPx8uwUNnHo12WiQ6s6iaPMn4MhDx4kYRnnrvTKc3yYWGhFQPitguMXY13x4zxxnVjgk",
  "key7": "31wBY61zHHQU6SN4Nk7MTWm8iTvApCDzQ2B2nszxF5JyLPp68dQoGU5ukHp9CMu7LTaahUwZeoRMiSZwcpj18BCu",
  "key8": "37owyE1BPE1RGx3i1ckX95DqYTtfv9zBRqdpmqeYCNt3mUxdh8n3zSkkQjLFwf3U8hLeFFWYVft61E7K3PwWqtUe",
  "key9": "4QhqddCVCnRGYYtoa5CreGnzhpwCc16vPa9wHRaMyaZWGb5CTyeTxRoZEjdULJunEdf8MkUW4BUqhtURNuWR853L",
  "key10": "4dR7ZPCHdWJ4eBNVCQnfebuQqm6dDk2CsSUzcnrVimSM7WwsKY5bwYEzLrPHKQHPsuD7e7NLDLsrjyeNmwuPVqyR",
  "key11": "3BvNRJhM5acY7A5ChKHgaUZ7JYEP9ya3vgUc27SjVhX4d6vFDttkSXHMELRcMffRNSDCNCQFiM7o2mB3CKkZmTQa",
  "key12": "4JEmvs6PdcSYJ9jEPmsaosSTkxrqGhBZvxxkvrSgf4po7ovEdicJEvcwXVZZYFq9esnc41o47AHorBYWZ6h9RnDD",
  "key13": "354PbPs9RHDscugSamq4LYYHpwHcJkMBk8FDVWABScEZDtA4Bo28wUBP9TzoqkF8y73g3Vbu2pk1aiwZfJ2emKAm",
  "key14": "4DDKAb32rjV7T8zH78tWwYF3mikCwcUNRq1UGQ1hGVy2Z55ekgpbFMUWP1PPaqWvUQPe4vjbQWrAoCqZ9Q1VZxdX",
  "key15": "5JeQNnCEsAUNutB6Kdr8dMkzbSVxnXxpuLvskdgFB11CSjZ5cvs5Z3GA8adkp5WYzA52RwNi1eGEa6ZxAw5E9g7a",
  "key16": "KtK3nz2CPSGXUNChNFJEEwdhwjbyY7eUuqzZCUPoAVawejMcDzfxrGEDVc9W5xE5AwpyMwJiisHQJvz7QCaWj7g",
  "key17": "2KnecGnPJfaZCUSiYFe9esNvr8owbJWJaTTvp34hbYndGYypGq4NB7FLFm9pD1TEUdjczeE6pU8LJyNABaB8tZXX",
  "key18": "63NzdQV3X4VPwyeXv2cHf4QDAgjtaNmMuxKc2qtFwGdFNNQ1vs4UA3bT3T1Xkevpq3yRVbPUMsWS7npZ1W3rqdGE",
  "key19": "p1hwH8Ru2QrEiDPFV3DtN3yfCHJCM4KntFCQQYYp42FrAU646k3BmvknL91KkNE9rKYPMj8TEqx236YzrmcRju8",
  "key20": "27gKG8f7YP8gh6fjdky9SBQRnBgxBpVZjKZj2tEYUHmvJfoacTxTSuVoZuK9eTp4SGCwTgFbP2Xanqd6MAL7uamd",
  "key21": "4Crey3vXTPkKkPQ8zYh5Md9iKbirBC2DwPjw13rbKyXDmyDZTszkvN1RFEQoJF2Qdh8ZT5EMjZoNRsCMZGcUETgZ",
  "key22": "3rZtkw42bNZjRAW3h8r3mYMxshBvdFT8GwcTEQNYpXKtEyn2s8fr2gNtcUD5VcsAzoFouCMKLZNNJs1NKakzr5FH",
  "key23": "4GoKwKuZJ3Nkm7Kd9ittDgTNAS3DZvBNxmg8mumUoNDQUCtUhkWTUc39GiWdrdHxccJzNWWT4upeyGbodH6JjCu4",
  "key24": "3ek2GCPz7TVHRx2Gpa98AUJHV15oug9zPVDwanqA34A8XAyyMutdqfpCejvinbzBoPfY3eLYK22RxotWt5fPXGuz",
  "key25": "5Fp7wH5hpYdsJcb1p5SXUCyJHXNsJ65GY4vTWkeFe7juxGgiJNG4Snrc4g3fM1DDhGMuWhYB9wzCJoVLsBJ642NH",
  "key26": "4ETnHbmhA39n9CTouEXN2TwUrwMJHVxsHdvt9ico4RoT347Y4ZhDh7yGuvMs1rrf2L3z2mMVVUZjCknXCZFJcnwi",
  "key27": "PQistRstDpVQHNQodQ1rzUkRAhxhF9ey2gkj1UQWFh4XycnACsK4GrisML4r6AtVqSZ69YnYL8qEFwU2fGwDPkw",
  "key28": "45TbdYrBh9dEmZfozpBbSTBMnkZxNUSsYPTMNLxZW3UizY2JRgsSSWRspJ6oFvsvDHNpYA1qyTZsPthGrnEQ1qnz",
  "key29": "2YNeS9PnfBpovBa7patNAMT3Y4MLLsRwAXCtTjeQgZJ7fJumsX9KfreqZYemnwVk93RvrXLSw5dpmiJF7zhE6FAa",
  "key30": "5LBxwvYdbNdMcxp9rbXWHdwJQG9zrWa125cNXTQVHfmjhaLU8nzMEnRwKqM96crNeMnGwvxanCAoVMVij7RVQdgp",
  "key31": "533wExjKjg5EvEwva4Seqqb3u42ZcTc1ZDrQkoiGoyMRX4bzSFHTKcrH2gzKVbLiuazv5Z8CMUgGp5MiEDL16LFz",
  "key32": "5QvAnZW8WHZpNvpKhpaAVaCAgWTed6tWBWCJW7uX3m9Cm5VSfL4zvHXXFfvHypY5yeLLNhbsV9phXp6yNM9q81Ne",
  "key33": "46GJpVoZgoVmmkfnctVR8CuTSZUeiF7RTcyjmHvx6QQdfRMGyHUSmVTxYr4V1NLxC2KTWc3Z6eFdGnAeMQZHrYCa",
  "key34": "3eqKDvD22vbddhUCxhN4jk3NLmP6sF5sUfDm5hu89BKbAZ6WMaRsm3jLkiqrNQuzY7fNfVt5Lum43L9MuxoKz8z8",
  "key35": "3BMPbcGq3cVmGEnKSPwgXBGKSBdoHBgnWtKA2dMdkEgLbFcCqftZa4idCncbJDxgW8bnDBv7eGARxNcA7fNUwhW3",
  "key36": "4rHH7PUxqjdf2wmLBTEqFB9oGxdbnSRLtk4YJxCVjF5toUiNdyz76anasrKJjFEChV2Qqk3VhZkPz3CY9eQEdjAX",
  "key37": "vfo5kgD2ESt3edBDJu9FuoVW15ULhhvCBq7cHEtDEzTTbWrsYgDGSgBk7eLPHp9y1yXs9ANEdyoivj1x4ikUYL3",
  "key38": "5Kx9rPE9S3xsjoJtBsaPvmCfDM1dQDCJSbTpUP8FxYyvxxyVmdJWtgkNts8HMXhCpgJ9HuQo6qUU3tvDXu3BQruY",
  "key39": "4nLx3v9csV2ShMBKHW2kUGKoGCwAZeKKMf8YRXykXRaKiEzWEKebhm5gShTxMixrPXRe7DDWt4k42YgWbzbBBu96"
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
