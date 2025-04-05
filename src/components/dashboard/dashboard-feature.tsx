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
    "67NMVGch7wKX6Wrkpxtpk9cDmHSFZ3Yce3T1kLdJJVHHS6MgrYZSShdw53yTeSxBdw1FetKnE3Re8NgdRCRRvZvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNLyA3CJhpX7JzWPwejosy8Bgb94nKHKvEJ8f6y1Ggks67gYk7eRpBDGk6uxCzEJLZCCef3zkAkZepVcaxBZmTv",
  "key1": "3KzSeThjSFipZjftF4D4mWCpt3EeqSjZ18PQnWrnvowYawBJ3vxy9cH3zpSFyraYZBCUdcKjU1AH4HWn7GZnjP4A",
  "key2": "44x3d9uFf65sQrnTA1gN5P9DwznL96wBUTwD19NKRto5Evq7c5G2r37BNTART4xzoenZG1Em5WjbL2MVtMTpFHbJ",
  "key3": "5Uur5GBUWDCovyps6ccbKa8CjhMj9rArowDXyMuzFA2MG74nMVstcdsJTYSCdMkivXGmivwb1EfD7553aZLdKKtM",
  "key4": "4owEDDLsRU5QVmUUFsgUzknodjVu1XDMLiV4afEcM9gd9DjcxiFkYmcMgXCRyg7f3sToAC5MmUg5o5mfT1GkTDbV",
  "key5": "4b2V7Y7dKbkYpBCX2DfVcdEcjt856zQcE5gqZhZHoGciLVg8zrYfKf7qgVGjH4FmSfGc4WtfX6A3QA95EKvNmSFP",
  "key6": "56ff2wNJZKvXvL7s1fSzMBryWBxnavaaf8yc1GzbWiaXVezSGkd6FnJPopDqJwmcWuHoGgi65viwJPfSwBTc3Eib",
  "key7": "2RPDD3UTw6VK3aY9RUh1i6vtmvMV6hrm7viZ6UpTXEcsAnra8x8iKqWxBqSCbWvheKBzdgyJk5UH1eioPDaVmMVu",
  "key8": "MgHB1h1TNKm9o4d45Jf5Bzny5T5VgHAezEpdSk4WvVRP9pji6UptA9cyghN2xymvQpfG7M5vMmLEmwKsvRdZHyq",
  "key9": "42HX1vhcqNxUYbeRp8z9tYoBHypxyuYoRmt3HLSbYGstxoWQC9U7eHU1yEztmALwTPSzmiyz92MzUDfdW9jQ3j1y",
  "key10": "42hG3PypqFZwfDYbSswbjXNna1euYuLGggRLstCuMAdvXBULx1HjnakNDRVD5DFGetEzURtwb66ZZRkB8qsa66pP",
  "key11": "4MpznVdb8y5WF47Cw9NHWe951QMV38sYUJVSZNCvxgWNis7sqKCawqipqypCDrSc1nBfaDYpUMVWCUiZ1BanXGoU",
  "key12": "2o7FvEimKtfAHRE6os8pFHzThWurSqgYvgCgrotsbS8LuWwoK6dwuSYCygxuJQWkMdsM3jjanT7WBnsXnXs4n6Pg",
  "key13": "21UPwNwSNFHkdVo4eQ9Z85MzauTW4UEqsMbYSKJbNZvRMB1tcXKngSyUJbEVs5PNRtygAe4kAa96sjYq3YdAGqXb",
  "key14": "1VBWcyLkXfVDFNWJTCpQLhNrTYSGVkPa6SpF8JgyhmieuigRCD5FVudVVU8C7QWDV4obKzL9wHCNwiGAkmgc3kP",
  "key15": "2D5k35YpBz7T33UaZZFkfDnuupAgNZATDbnbss5dto2a8z283eddWZw1EEvtXp5NWHhPZpGKJVNPPU9AK2nmUZ22",
  "key16": "4TTWhApbPfppYfBwch9wgnUTU7NTpNhRQQneRgHERbFJkQkkk5fpUk6qB4rwM6rkuMhgWfUjhxzUeTjLpQ6oCyKU",
  "key17": "tSidqihKaMDwf5mG9mrsRiYGFsRqyJeGjyjLAaDP28Henp537f89vFkMgbNdaEqgdRcyGwaq2zoerTb5vhrLu4c",
  "key18": "45o4o2xNn1qhLM4mmdaRN97tpb88e4MHELLzWZEAa44HSby6SKYLRtx6tsso7di5d996CJdaF1KrAb4vy2KXrL5d",
  "key19": "5cZFAmkmrgEzWeS7K8QDproR6idtpiAihv6X2YhPHpCRfcmdCjUeYrJLs2TQXkeMidZtPE3thMm17GkY7bBGoY5j",
  "key20": "uhFu1spgwSeWL1L6Whsnkc3xUgk2Jf1cANy3MrvfnUgPzvrtVZTHQgPnCHYxJWNvjqV8j1TojPMiL7vuypRDnXy",
  "key21": "jEAWbMoTHrsLCn1vrjWE5Sujp6WMTVHqmHJkwZ6JZCa7Zuu5ehEiFxSmBoEouKUFhAUAM79TYCXxji3zrknepyE",
  "key22": "kATSXg7FSGtYU6oLPdUbyGUym37WTzZgwXJhLZQfQWeFUMzL3qTA9tgiJpFmdnQ3vHWe11YfDHEGwzT7C8j6tNr",
  "key23": "4PaLQed3YuaQLA2GqrF3bW8UPUP38qUafoLiqeTPV5kUmJs9r6ZUoaUT5WMaNVJFqN8ecfMtr5ey4pXZBUszhkmS",
  "key24": "3SVKowpXu1bVeUryj8RGgDsgp3NYezK9rX4n7dsbZABX1VTEnZwVq1Dx4gzZfxmmf6oJxQ1tnruMGyuWnj5Bzebn",
  "key25": "5SxG4Phwe5NorCnG6V9bt6xuDKajR3ktKYKPkBQQJZTcmZxxYP88RWUUd5KB6iF4xMveEXhWksuHxXKFCb2ovYtR",
  "key26": "5gzG7BcgqrcowCfCUJ7p7rwkgiaQmtLB1RsDxvyL2biy4hpEUpf57zetVjpFyJpVXKYmL8N2468E5moV5RqsrgWr",
  "key27": "3kpZYHyJwuADaHXeeVHw1ihAPjc9xdmEeN8PSX6zv7mySMHWySJzuZCMWSS4WquQotSxi7gZed3TdcfyP5ske5p7",
  "key28": "4r3he4vbzu5Hjt2UgTDTWerJY4qSpSrP8WsK4B9fLf6gJyYUCPrH3e1awRPR9hc1kkyQ2cGYC6bX9s6nsRW91iem",
  "key29": "4tUHd3PtPUSShMAUba4h1X1sHE27YQaJCzNQ5NbpXXwKS4i31Z74nbQrLahYqsN13hsdrTFVrf99Gon9qpP98KBq",
  "key30": "HNpRD3ZN1vasX4k7zsb4RBkSKCeLN1gP8cn8SgeY58Bn7zVprU9UPyD4h6U4BzPTDwGKcBd3dkNkgTNLSggx8uY",
  "key31": "3tdFxD6g7DvULZPsTVhd99eqkZKLHTjuYRaaeqd9P1nHbB7KEq1GpCd9qAJRmMtXmAEmVsz2tmbHYch5kUkGoqcw",
  "key32": "2iSm8EHXo3bSRargw8F7A9v8HGBX89S9DEtYdmj1wfDXuTnueZpAB5cT95FacyuWH1Kd2b7za5sdXtDFE8m4TpSt",
  "key33": "p9bTSf3uSaL9pNcCq6Ym5Zgh2KFDrJQbq1y2W6pxh1g6x2A9BvYMjf9YiS1wTQoF1q1VzmXsL44qKGtV2EtKSC5",
  "key34": "UM4p4Sw42SJrndVaPbTJayRKvD53AmWvV7mwJCgNj3uwYsTGiUD4Coe3daa2Zaf2tePLrUGdwcJDKDYdzVKxRU4",
  "key35": "24wjY6LXY5k6WpoCPLqiSctixcpXUfxiqDBXU4WCJ4F169aiMwxkray97PRr33ZS3zNMFEF35cRULqG8cHxWwhTn",
  "key36": "3vUbd8F8xC3h4tL3zuUpyprPizfhu7rumZZMNP4Dd6yZd6ostmXezGUrvQLaDqycnX3sfKwCKQq4snA3mMrYxcUs",
  "key37": "479aQgFFBJt4bso5VJ3YYvmyTf9FvcaAtkFBtG1E4ZSAqYBQ1aQqfMKKxDymXLHa44ov4qSNL4wZfgASM4BWqdC4",
  "key38": "5LdaYGGLPwe3YkBEYHGN7w1XBtQuo2UYBdotDLJm7xaiwWpwqi9Utvv9JxKeouqjf4rbNZMxyrX2Qc8SyAEGiNpX",
  "key39": "5uV8bizELjiSeQfDFMD3n6NfHJL3Zo31xeJAYqHP9RGHYDRJCLwJPGHrr4zdu1TkbKNiGKHqMrtVs83KiBMD6DMn",
  "key40": "4dF3pSUp2H3hYABcgZFdScFqPcBhyiVeGg8iHpAM5zhTYdUVU2QnARCt3XnP4n4zzHuGxmunTPJJWxzinokZ7MHV",
  "key41": "3w9nCtwNzux28cn3k8PCmJSsuLaw2gUCg5iah4MfoEgMiTmi9LodHLcxhTrHqHEBM1QrDpSm8LrhjaVs435pHFJM",
  "key42": "39i3pQGtSn4Yq6XSj6ys8NKoHpMaJheb11rf62mQVUmcDJ8DiR5Gs9R5o2Mq1QBHD4xZ8uFpY2Cf59sg5tHKAwMS",
  "key43": "JiPUPiiS4mZDqm51XAZmhoy5UQZEAziLJ8SiXxmAe8bVDJpdHiM3dtotkPeszbBWFYUsSeKSqjgoi1DQhmGxBLk",
  "key44": "53Ru6fiCemgDxuGsUGzexTgHnHfKtBuASrT5ctuXWuQ9CDtDYJr1gTFPUi82ihTnTLcCQRGzgASjx6UdXCADHpmy",
  "key45": "5sryn4fD2V6JAH2TJaQYskQ7smuhFpGK2azfzjjQeFSAzvKBdRUm1BU6E6R3PNdP5z7tVpzyjDWVFtctdW7H9eU3",
  "key46": "22U8QHryZfBJAb7VpsCbLLtLXGAdUMPY6obpSHvAYD2cgVbbDnKT6mXYmD7ELvejftbW4ujqFJn3Ga6jD87WSYGW",
  "key47": "4JS4SGx1VJLRqrkvQCQzzuakyN4uWjarnFQPwxaGchTGJnSJM9ABX8FcVSgEStf2bvj2RPS5cLgYm9wnYgi4BYtz",
  "key48": "4RZm5RYUK8HPJ8egDmvmVnKdBkoDe1d2Fethuf31MyY3TwJyyxw1KiZkRiEgudywjxqEhvLbMnArEHpDJoFjgY5R",
  "key49": "4WBjkWx2cVsBYSM98QJtXJaUZXVamDafMXsyxRa5rUqRDxupH2Vc62xCVMuFCF9EPhp91utKCrqfk5xXjKQPSJyX"
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
