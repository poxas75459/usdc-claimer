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
    "5PwkGJkZvBaUhuqmw2D3vkNiS6ok5qc9ahuhUjzHj9eVjr1HEoDoqq8sYKTgWE7utXkR7bUMHZYEEJseEqEgxtSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d3REzJ7m7bVMHYhVzsiD8NUqAvd2tWmLDQVyzv43UEXh768JneQsuKWFsWkMcg5xyXnwTy8p6FHF87zk7bmnu3k",
  "key1": "t8rQQaour625kH2MTVZva2oJNdmMx1HjPdmA3scMNrrZf1basfPaeuT9KoTDjJ1fzRpw2jKd5R2DscSLnVxtAfT",
  "key2": "5E89FaLqHGUqcwCGbhfJKS4yqjdQxP9iBL8SuXsp3mxyuFwLVe6w7bNnyaPxaSC7fuRR5REZQbH9VYiHaw8tKqTY",
  "key3": "57Xp1bJCH8adKgemk7XeiVgn9YSFcGN6APHGXTbf1gncfDhbQpfnRSsF4PxbKi7mGcKtbyGZBSJLZ8ggGRGb8pQu",
  "key4": "2paZYbRLYR1ekELAunccc7bfdrenCc1Qj4Ay8E7szWuoXegC8WGt1gGjc9EYRE18jhWLNWgd3sBiuKDfrqbp2A57",
  "key5": "4DqxyTDKGE42RexwheJoKEnx9iDMyMMvuqqdooUcWmJZvKbysy8BpSzFYP4PF9twDorCnxKmCscfzzm56b2no6AP",
  "key6": "5FRoCrAMgw8PY9RTJWchjxZhwSKcFbH4KfgmZXYF5UBH4taxqCtmN5g4ynz5A2KEUzoAkxmLwMzW681Pg6xUr5T3",
  "key7": "qm6SN6EWvw7ArRzyRqFCzdhxpt4brWrAtQ3RSe46Dybpat4yNjNHPpUKdz7ur9mfknBKSZbryGkKZ7TyKEy5gFu",
  "key8": "HZck1ZRkGeT6gb6b2H5ChhYEMNnEE69SE1RDWv42vuEyxyubibi4ugZpmNt1i1ZyB5z2erKgMmRuoTTDaDeWvSt",
  "key9": "2QkgRrDAstPtxpvbEoZrUFRya5BsPUQ9zRmnpkB3Dn6qNQrAc8SBSKxQ5tFdQeKWruYVsGGJMDWEnhe7JrCuLaYc",
  "key10": "4ddGNeinDb6CvYBprJ8fsATeqwbvMBRL26V3qE9n7THQegwTSJN14UQfrjfDnSMVpEh13cUs2TiJye5LixkZBWf1",
  "key11": "2X8EgbsjRjGPj7XfCdEBuzwSU2w6AkvbQU3Vy5F2kC8gAiepsQxEAUQo54fqNLRu7d6BdprGus2L6Q87gYyp5rxU",
  "key12": "5dk6wnGqD1V8nvmvBVrTxLDUjY8nXBnr9QVHLjVvMukaFWBAwm98FBfiQYC7LhYmrt7VMoPrN1sNu2pFfLj36S9h",
  "key13": "4mmx5M5aPRgwyoS77nbQJgUifMzf326e86aCxrrAU5rm6F6gknej68a3qGYDvjrfCx1NCT6bs3qJfcYaMZ7BYLWM",
  "key14": "3Z6MZbVwnF4xqFHYLLCH6HAH9HJcSL8SzEmAasRpxNyFxpwjLhzbBAFxiY4pe9pDnDWxHKnVZYEedmRsebpT7HLL",
  "key15": "UcZMWFrZBXE6Hp4pEGDq6bfmae6NqcF2XU1dj1cN3o4AMqC5RvHUuCfbukRC2mFisSLhHbEiSwja4BztptHCyjK",
  "key16": "4SRBzWGLSt1yZatpHr2SDCkqkUkQUSyS9EmFzac5Yzrc32G8CcyRaPunE5Ju1Gb4a2gb6243PCZzf9rTcw16nK78",
  "key17": "3FKT9UQZBW6C1ikHm7zaym1AJpW2RHzuMXzgPBg4WeehyaD7kaHaUs75oqVPreU34MzzuAoxQm48RG3jshZLPk7h",
  "key18": "Q5dJmFNqyNP6QW5cR2uiMbLChSjgW8QXaWTzEiHG9SWzyspXnbAyY6HibbTUZtYeufCY7iFqs6deroXkUUXr7gE",
  "key19": "4Qz33pjC2EbWnaUkKMKh2hgVDkdWutBtSFDfGtTQryDM2TNhL5Vw1gBkKcQMZHKpPaFYMVoSRasXbpLsRnVfFVSY",
  "key20": "2zdQuLcnR2VoTdixNzHKUxaeqi6JRdSziYpaXqk2YX91Bp5i5JFoHfjmyvKdnN3SDK5Y4tEJGvZoeXCJpMvTZou1",
  "key21": "3oPsAYq87fLYg3pqfBkBhckDxZQH646LSKaLN2QujbLLQutzvrKXQSJbxd4uf6Rz6mrtrK4QHeB9X3s2MvbaNvFa",
  "key22": "5REZXKbK1bqH8RpFGoBeHe9Qznc1iU7rEkLy9c8vyKaXUpDuMbsupN94pDdHATyoj5ZXHryM3dBFJaAGYpLg4rSF",
  "key23": "5v37fvHDVaMkqTTw6LUFtZ49AqRjo9Jjo1aQ8zoGx6UAtqffpjyU8AvemPiWuM1V58wKmug97UK4BJhDV9LVuwqK",
  "key24": "35zmkLpTdzgh5i8YD8Z5p6FAxinVBBWVootw3R3diWA1NtJQU8iWfhtBYwffxntNhFYqXNNLBS18AMYzsKJtbwc9",
  "key25": "RaEHaGufjoWZCJ5tRtxV5MRFkqxUn8Swczzr6qZ6XHPADsnUSjQ2VfPJurTdAWJK75CdShKWdNdgPmPxvXy75Ed",
  "key26": "4De2pUiaqTRyGmLw6gRxaHPPchNAo965kdSGzCK8vopKYPUC3NoFcRXQxjiFpi3kfb8EohU1cEX7G9Y83qyAsa9g",
  "key27": "5xVfeoDzapC7gjjDvpdNn6Qdzdqvg7bUk1tW1CQgwzmnGnRPVpEk4nyvsNZPybbtqBjeCDNE7L8UGt8igfpLNw61",
  "key28": "Ltkfsv1SMnMG8YrRJrFpkooVWmzMsWn4NuKRoyjNGQBFtnRWDqComSWLNWYvvYH57a1feyus8t8g9DgaC4Czw23",
  "key29": "2VV3LiuDTAZaYYTrWUh9Lyxt37BT4p19s2PdFaiwQ7fTfiQhfTQeVHzynpxCyv8W1JxjYb58saJytYvcVaV1bajt",
  "key30": "5jUMRP2iqShGTq6zjH1TNJPgtffDCCAP4eDdBSeWcf3AiUvcrdSCGb8vMNXh5jKJTpeFLWYwZXHUWNmgerEpAkvq",
  "key31": "4Jr2Lya46H2Yit5HGm1NRng9c1MtGSfhtxCzmqwLs5JZWR6HW9V8YJfgoua3KzBUYnbz54osb3eSt8Jg2PtuTqLi",
  "key32": "4nAkvbHKJ6sZxgJg4wnbZ6RzB8buYPuZMdyE55SyVQfmiThZD2qHc7YMuGSjFrp4zy5PTSvQvfFAq62cTthkxbcs",
  "key33": "5ecRBiPXUiDD3kgVcNkyfTAXzUGwYqGvhR8XWDNHXeMVEVnqhBqrN8tMEwX5jdeqL7atU3Nnywk9AvDxLzUiNUeh",
  "key34": "G46FtN8sK2sY879M4dYoXSFHBM59TdubtorfRpZbs6aud35sVUNkyzhVjx31fmBWMuwfR8ugtEFXs1dHmr1Zwzj",
  "key35": "52Ng1U69ibresgSgTpsSoRaqEK1YwtDa6ekHhTDBJqs3h5n5ZKTadF3837bF387YKPQhtEevoeJ26i5ZyeiVWLoY",
  "key36": "36aKYFUN3tx8U73pxDANSaSNxV4HtM4EcmZPgyVCnY7RHxrkqCBxHqkNuf8dNwkNRz795UfprA3pBekLfYxKMwH2",
  "key37": "2qKxSyR5axYw1Pz8upnwD7PLZtBeJBE64t5LZGucpAugRpw3bBQQUoGktY2tcTnx5TDR5TuhQcg5GVJxKRmTNE39",
  "key38": "8K3zhi1aTx46NzG7CmKVLTKs8tKe5fSxzo5GRQLf1SWfnn1K3Xz5E814ZcwaXQW5MLhhBB8MYUQmGCCV6o8wpiU"
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
