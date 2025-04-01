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
    "5hpjJZxN3ycbVg8LPGYkNjUv7oBY6TPjvRJ2BK9wwLsjMaGx1EacJZ2j6ZewmqZactxVh6tE6mC1kPdHxKwgHeYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DkmT2mFrkdJMzEE6mgWnWM5nSVbMBtynuadLyKUjrfYaYtKUdSLZEgcc2DbJs94fbr9VBhfhMHCFByfrF9k4ECB",
  "key1": "2qwExHQ8VUQPvcLHUhYuWS8YXUs92pRE4aoNiXqcxPPEHfDfiqBWuHd14m42d5ZgBNbRnzZtjyu72tVa2h6sfyTp",
  "key2": "66aAoZmBN5PWWqv7WEBeuBmbeHHoNSCsjr8a3ZSYvr16zai4PuMNjb6MXfKbLmdggxjFmt2ZmdYmNXsshMVsjfQh",
  "key3": "3d2W5GD993uUuDmZc7gijn3hX2yL5hb6oU2VxBAao7cRtDawKDyE6pdRyqiUpX4FJs42xbCoBFbqv2Q157y94Aio",
  "key4": "4qmR9puH8h2dpd3JWsttm15p9WqNjGVm9hSS6nKpM1kpMtXBNR9boonUj4yiqW8jzuLr5ypuhA8VFUXn5w57nmxN",
  "key5": "41skFZQGqfLvLDtHZDgWu6E1YCPj9F8PW2g1bFKhxDnQpFvddHrcc8drMLSTo9qhWsjZnnNwDC5Gm1jZmr6Fcjvf",
  "key6": "3Sn3n9XJUx3Vj2opc1v8sCXrZJMn9QHEvTHioctJ3M76xwyMSw2BPKGt3v1MV7VCz2Lo9k1XDtMx3wXiCu1qxptx",
  "key7": "56WMDAvfGgHQyX28yvTYW3Zio19hn9n6CmePNuVjuEzFg1RAi2hNyL2kzmWhcgiG5jDjTXt5t6Fc4eYiz4dPqEkK",
  "key8": "5Vt9XzRWHvhpTMRFbCYim6DtZEwZpJpovxC3QWFrqT1Nozv8b9bpuGsgkG1MTSK7h2Ni3VxnViWXZWdcYGHccfgT",
  "key9": "27tZXqnAjJVoKQYAJEfGTvn3phMkTM6vif2SB7F3gAzWur7bgMuYgGQfn2RKrvzzkmGa4AdgdqxxBrFWMX4bXxEG",
  "key10": "wveBs22p2q3r1qMXkapGz16QfQfbYUttzfiq2QBJnTmbvjZJkVnp7tFn4ovr1xJ3c3tPsFjvP58ZCStakBxFq5P",
  "key11": "47uq3TCEQ7azvVHnbg39WeykU1rhUrHZ79KyAVbrrSR8BxsgywAVCJG8N1RzWzhyupRsmkqafTnGoetEcHmXK2H",
  "key12": "3ySHcsYkBhimLqbJfGv6tiMtXL86tfijtc1ja5SGYekWUBn818FM4qbX3KHTQdpZ415EiVT3aUWAoDUWgQe3pmKj",
  "key13": "2SYM4AJYywdrTaYLprUNmH9c6M3nx5Qk3ZU7KnixcS6JBxYvqr4u5U9hKdgG5Vy5HtKLo5ocFuP5dRnh5hGbtiMU",
  "key14": "4sAMw52TDuMuco7c84S2tuXK3M5gXvMgmJk8FR8geGk4hyRifNhsbs27QdCXvturMtkocrMEKfdC4rs42mbDYZ7E",
  "key15": "5JGNRrn6JpQ38pNeWUeW14WddREPvhmRDzQ9YYDxA2Ekhd6DuoF8TdSVvaAihoUKGAhnn95vBGPMmhZBvdQ5trNH",
  "key16": "5dHj4TDsm6M442RfMUGrsrsb9rtzGSQBSQxhfZGh1wCMsavFoHYdD6oy8BB7J3Q5skHBoTUv9wZ2eHf9dwE818Vg",
  "key17": "3GkhUW3nWhAZuJ7fCojaoCCa5hkHsuFUp65YHuqKyHL88BuP3h6A4EWtsJgT2stWnTiZezg8JXtXy3o2iJQbciWr",
  "key18": "3kkNtpST8Fn85SK7odbaJL4BFwv2UnwXWHMj4AZ5SsN7FHxtrnSQFEixe5QTtG7E7ae5Ytas3KkYkLSNj3jJeUpU",
  "key19": "JP6g6Sn4HQwmfobuFHv8wUSUp44igfycZQ2Jt31HKF9JAmsS8YXPYDDbeJmKGgYjf4Xc692dFtw3jcRGPUnWbdw",
  "key20": "64dkHcXgfnzzr1weKFiapfoWsA3JyDPRZqe1D6qyhhqeEK4Md8xS4J5eG4b2D536psyDP5HJgZQ5NwUskTj2Yt1U",
  "key21": "ucxwnRUarZq5anYCsrsxYjgCFS1zV8yf63RmnRCFFEJwXsthtJWzQp6JKjMD9W44wfiDfhPAPRBpPtsN1MpFjFp",
  "key22": "2uDt56pTzgg39P6Q8BokffRwisofUuGxKAiqyYRsDpeGV4Dz43VVyCvLzcMm2XkCoqVFqQebX4mrKhimEXPBcpia",
  "key23": "3NQeQbLCoGEE5acfKsDiDbWAtkpeTg55ac5Nf6S78CMa6GonXBUoCLLY6S61orHo3FGDVjDLdzdLJCqNe1mLJsfL",
  "key24": "55yTTXcCz2ZA9zEZPFjSYD4EF4anC3G5ZW54Fb5Vta6KYPLRYDcCMkC7fCeqozwQ3GGysacF2rhC7pq1PLHcMBnF",
  "key25": "3wtREURPAPamFnAeZSeNXrtaDEGvgpMc2ZuCA3XirWyw82HpFNfz85drQLKVLY2ZpCP5FQsVxZC4RbdjsCKne1S4",
  "key26": "2Yed1g8FsvpBGgBWHZWEKCcrC5qnuytxpgDk5EPxTWMSiyrihUpJMyotgrYv4ZJhkdEh4e1npv3CWgk1itxUVYAo",
  "key27": "4nXmbtoymjbe2G3arxmV354SXvWaJvv3eUgj12ViPuZMPQvhzaCAMhQgarU7kfisyLQbApgTXfF8fPmdAWLjXdfw",
  "key28": "4qWtin7YhtdtqDFUo2v5kXm5LxvaphAZGtXmefKkA9kekK4SwnQtKL2riJPHLUC3y2Sz1CzxVcNtf8js8PcLNPvq",
  "key29": "3Ta7SARz28bTFFuGEY31g7gc3hWJnTSwdA2R5icHsSfn4pVaG1S9tzrp1T1hk5zM717jSN2XoncVc6F7ZXBumrn7",
  "key30": "5WkNHUuBPeNUBdz1Zg7goTb81BKHQKY9kV1XatqG7L7WTDLC8WgMZQpGNKb457ZUnUe1ypaFDMiwFdfAps7JK6Rc",
  "key31": "EKUfKrScq1VSynWAgZGMCheUSXMHd63CWrkiN72g5eDxZoMdyALi1yhWtq6WD1Tcz4Uf694H7BPYEiiazGWcGqt",
  "key32": "45WjXqYhTbHGN6SYWKCrT7rA6oB9fFQwcc35niTweNvykMarmVwY16SCqnUQPwMDrSNouQof8MPqsXYecWq4pL9x",
  "key33": "2jgHiJ7CiqsJ7xRXyG8R1ZzhWFduMCk8Y8iKkpz4VBMDqN49DvEjsZv3bjKs7wejDZWQ1Pw9BgX9PWXX7JaTRqtn",
  "key34": "5oxEdePFbcwBvEFcyC14KHPJh4jjyzZieoHkxWJdVnibx7YK3axR3miaMJPm8xM57881xVMpxrHUzymuDxb85KAg",
  "key35": "5y3DFnvaHTzep8AUPpwEiwkhFQXfqmKz9jDRKrZfuZyapiYmgxzo7TDbR5S4ZKxTENUEpMSHD1aMhbucLhEzSNKf",
  "key36": "48JKafEHrCnYBa5FBoQbCAepHsLNm5uB87chTb6JvU7AWR2oQm1efjdNyCoUfmg5ZPfJ1CWnDJ4nBsNQS1pGS43v",
  "key37": "3ReAx4tfBZarepR7ukir3xmm8WgnKgE6VJuWzYVVX2F9UgsepT32kFVyiRoATyYCNEx3WbwMFx9mn899CuAmdk3m",
  "key38": "AgKfthKXBpQvejgTsghqkBHa2PAVtEM1RpuSzcTZmcZ158JjDs4a7DaCXEUXZHKRSNfn1oYsZGv9yAbEGr1Trq6",
  "key39": "61bbtEArbuydPRMd6Q8iaV75XaLEd4b8ByFYcbCFmbZjgpm3j23Aty6z3wgtzQUyX11B7G2Fb7rwFHfg2z8RxX4H",
  "key40": "4uhSZHeJ1Fx4UdUCRkdB6KFxoonaBZohXvEEm3PehLUmR4uSjWGjVvKQi4JCCHHMdwtLFUs73rYcLVMnSC4QSFqZ",
  "key41": "VPLAvKKK3TB3WXqEdnvmBtZXbxYsL9oKioyZ85uBjXL91gtX8oyiVre4QR6epV9x9K8FgBrGutJvWRVC3Ah2AGQ",
  "key42": "3pCmACvoHAQg1SWw2MbrRvi6ECNgwjuXLTwLmrS3yL8WNmTLDHnp2Vih2FuyzJxjKNeFPyrvs2NWqjcb4DvKcWGb",
  "key43": "5VuxKu6NiYhUzKqgKwHWmTf45K2TcRgDHPthPdLg2y3xkEmTbZEuLq2h88GPLv6hSaPwxVJfSB5Pf3y6k1nBdKmD",
  "key44": "59Nm6auCM67p7Gh1e1jYoD3fvHZZdMsUoQosYC5ASwB7D6wGztkP8eYsMdbCfKtFfnRa3mPtBuinpkmN8PeWevf8",
  "key45": "5Bbw1YDNWw9cv6LaXSxSFtBQ2WAmENm1W39cVWnmJxtQa7dtny6yoEK1ad5MVVHHMbJhwYTGN9ng2fFC1XPPhnFe",
  "key46": "WHoFZ5UoTf8AkoCQ4m81Hwf2jfhGFZJ9WACTaFg8ZEdboSi4Em9yUeNWxU5Et97ANmmXUEfxvycQXSXbs1Tuubg",
  "key47": "65AV4FJ6SbBf9tKYx3W5zTeV3suvbrAkgNrR1mZUnELUePwugL5HjujB671GAy6fDChVBjKKnXevqhph7nkxuHE8",
  "key48": "5x6RxeWtMwsYqFfZwstJycDsUS7CnAoZ3XqEQS7QqmYn9CmnQkqePbWbZjaxsmXK3kBXphtrMvnCnMsiLiLsWob9"
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
