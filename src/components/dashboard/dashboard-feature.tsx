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
    "5Q6aXJfYZxY8HVJSiR8WGxqLP21G8h19xTL4F2pJ7hHnE6dxweEfU48SpqWraB2yUgYcuP6xNp6UpskPxbKqSX3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udYK9dgE5CfPb57xnYdpRG2HptRbGinsrjC5nL8xRByzvQTCCkKBd13n7n65MbaRW8qpFHviboJ2TYHQGuCarmw",
  "key1": "4z3d19NfvHUCJ7vzV7zHJx8iB8MtVSS927kmi8Bs8o9tax27BDvaEtYC8WQ83AUjgt7JpQMw63QhPeY4wmtzGNCX",
  "key2": "5NXdPwH3vDUbUtxiFc4Qud4pTJozNwzao1E3ter7rN59esSoZBhAs16TVsXgXyPgtTPGpWLovhCgKygENs2Ve6pR",
  "key3": "3Fp2fgihRBRpUULfCZtjQg9CEn6jYvfAWRtFz18kNvTpkQ4Vm82JUjjRjYPGf16E93Dj9v4beQgieCpS5epScfmC",
  "key4": "uxMzpreckYrvmEGx9yv43UCgQ2CcsEkHryXKdjp9MDY7oLWSdhc7aUDP5cX2gN61y3qNgHnuNvbb5fKKCxi468J",
  "key5": "4ELBRPq7MM7RdtNk1p7L1BqSTc7xkMpvfLwLwAfRZFS8gLbL8DzEf6u67dQpRrCTVEV6cKwpd82sriUv4RK4gDNp",
  "key6": "5nLUydMt9AHjusGFDRECFPEMVSxQ3eZ1V6awK2esRZqDbBTLe9dNekmXrEUgEzH87jaegL6bsMDgoNryThQ4zxz",
  "key7": "5UaqeTwD1EnuBZP6cPAn79cAknqcuLEaWXbxEZrf4ysq6xNeqBaqSrb54epeqiL34ef7WDa164oa1Uh5vGoXU1ZU",
  "key8": "5CEQdV2GDs4J3AMnB4gZZJ96NGUTRGLk1G48oUos6aiA87e9nqbihUA5EgyXZXvQ7mayxMKauUUxS5vdjYAzxmSL",
  "key9": "RxNsQy42sW51npovhunWmGdtyT4AdhjqUYqTrdZCDxJXDEjHkHLmtxJ6ptgPL8GiZvekABHJ7FsjkexjytRNc3T",
  "key10": "5Q1xXJSrY91g5zWacmeupSAvzBQDV6d55szNDhBVwcp9wgYJXiYq1N5as6Z2NREeFnZhzo5KPtQE7k5wQa8ZFgfF",
  "key11": "3PyZkMyTbisuJi8D7o9YnPfNJvDMkFrevSwiswucdDbbUjR2NNFugCDkT3cBJYX92EDBMz1ZgzoQx2g6jraYgTjn",
  "key12": "5UpawZNqtDvgyaizsHw79CsXkPTFVCzCgKb912h4W3jVLcvnBZApUSFEbB9Nz62wNXmtZM5zbMieqy9mu9z11VYp",
  "key13": "745d1z7k9mCkmxAqtgR2azewZSUhKsT4qepC5PDy3r3DuwWrv8UqXfwjc5w5crZrzTmL82SMWn6cKi4ABfsYbGi",
  "key14": "5FJymQwdkesurD1616ibQWnuXF5g71oLWdZjig1xKhV9RwYv8hJshnP7WrFikjyPzAm4nu5mi7hxXVKj8xi19F4r",
  "key15": "ykXTa1wBsoK7gy4zUPWN6yiR8bpZbcSKqGmzxb4QirRwiMKRKd2ZzhB3WbFU5zcwkL3Eobu4oVJYbSfKgiJazAY",
  "key16": "4eS61cnJvR7ZSa262MQRjJHSJ6dRLAxrWDZGM6AmNspdPbG9sTtUDkKdirmpU3qeCSgnmECydwViSkC28ETgu57d",
  "key17": "5swHiKquu35nZCpLRyGzMRFZ9YnYCVYZMNjPbi6ULL9cC4MKDez5GCQPNH9htvgyMfafoZKqrmngudVt1uKaTJqr",
  "key18": "4K7SSVjNjd8mEVeHdJ9D6RiYvMrEiqoyNoDBAv8chtcpQcJFR6BzCLypc9iNchoVBXMEFJJynTKKxf7FDTizE6VA",
  "key19": "dAMkit8VbGMZbdUcpZARbuHCR3NxHKBsjWR3EeHjt2RDWB5n1vSgMFBriBG4WXdvEcWic6Zp6vgvAWYDL6pjAFt",
  "key20": "61Bz6onCHyFUdXa4cv95ya4FT6fWzSEUJ5JMniXMfx8777ek7RkY9kPoxQcnRhKG6zPKZAufZULk2zUGJUQxyNpL",
  "key21": "5zfkboDTxRByHpaCPh1UvpPnxS8thWFTXkG7wo3DcAWArF7MZhTYHeHHrYELz88L9MohaN8ybtw5CKJe4LyjKwKY",
  "key22": "5DWx911JgpBeJFdazR1R763pWpei1BtYX3xxXCu5PguqTGp7iypfKSDHtjbsX6zDkZxz268tNninxVkFVazpt97r",
  "key23": "4mzKqEYodkavcQzFNtM4hWShawyr5SnN8paPvt32vxQ8YHffajVDof5NqcMZJTQ28Yqmre3DxgZ6Hpv7EMWMXdAE",
  "key24": "2g583H9TMFn8xZpbKsJBvMpFdHth8UG6qjm9CriicoUTbFjndtGPXUguS6uS5QW6vtpPhCE1YzQzvERGhR9Ft9t9",
  "key25": "R6Xo9dUXpQm6toFacPF3Cd9wg3exy4kq2d1Te5envW33yTJBWh8nyugQN2eJrE7Cw4ZRe2sppQDpknmJ3CW1ptg",
  "key26": "4L6XbBoadtn5CjzJpaSxYXRJJzCXyrV5cG59Xb6suqMbwGE5m9hyhqQY3T7xFem36snibbHjwoxZUz341Wdu4cXM",
  "key27": "4hK1uK9HLpt1GDYcYmceTcxy8wkmdfmubFXdqQ82tVbXSw2ML3fLjZiJbbR5H5MaaUca4QQTLranqd8vr1z4dEhB",
  "key28": "4Wh1qYp6U2ZpckSNN2BUFVbLHstnQ1tVbYLaaPL2Xs6v8r4mXUWUtNE98RYUQ6TwxGS2gAZdtibSHQPMnLTuy8B3",
  "key29": "vfQ4FVasUqw7MjnAZuCouR2NEEs7YVeb8GGcmab8mqooAuTfiXXZdgZRv4CLa7onUcwDhrcFNLTbtvGUgpaPgMK",
  "key30": "5MmmW7oWpS9AAzkNi4J4emcS2F8vALvcQqNU7V8Eors3w2HRWdCWV65hTME8gKFraAE6v6fjB3SKpWoxB5vzsqhE",
  "key31": "4gMWqf3NqrfAYi36knhjDpx9Fy5oEMi5Na8YVfVYbercpgbLJVR7s7uyRv83ZBoKGAgwhjnCBS5PLbRchfeRTSfm",
  "key32": "54tipof6ookKW1inPTyuTrxAun7NTbu9XcTYmCm2RmbZmfTxEG13N9heMdjys7Tu8qvNKaALiqPbvpKeUsmRAiSt",
  "key33": "zsDAJoJb8E2hGWQ75XbsCn8x2xyXVUQr5C11xYhiS8MnTKtZMACZBygG5YBGdJKmDjrWqk6a9MyfPrtLM7CYrbz",
  "key34": "3s2K2Xrf3QZvXUdpqemPpsr6Hgy6vwnxW7y3Sq2JvYTHxgoFEiAE5bH4xJyrVizEdpo7Fwd4pPwhsSQE3hPuA2uU",
  "key35": "3xbZePDATC7Cr2vWRy1eJVM5f1hveLiGg5tTVxr51kCPjBSikaQfG5yusH7SMFuZuhpsbVQB68Na2zTNfN3PcbE3",
  "key36": "5Z3jxeKneLvh6NSqEofTgcQst8Vpu2BsJ5g8n2LvKqEkBfaFoQSS9XtoXDgMNrwhKT94NXHJG3cqywFR13PsW6Yy"
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
