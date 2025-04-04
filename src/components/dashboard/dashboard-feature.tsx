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
    "525C28cLKRrt1mSB3nk9xbp4mYjkNoCJncyeRxEyN5FedZF2pUj9GRxSnrN1dLpBPEPVEDiGfwwuXkXNukiMMsSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oma3cKUdpNAFYLwPPmqWrPFR2qMmTVnJJi36mFopoCbA9BXbZn6WsD3zsccSqvFz1yq4JqAhyqVoaXsAEKi3DVr",
  "key1": "3QSeeWRhFkBXdXoScZN44W9ArmrwhdC1KtPC2SRcEVcaSyB7bDcrkv4DkNznAdeJFnAgrxDYrSRJhzQJ88nj6wHh",
  "key2": "4bt2PT5ndxNLy68Hz3ERvoUoNF4Mt11xztT8Vfh75xQGjc7V5y9Zq8XJRkYH154KMAYWp1Q3mKaWCjunW3yPRG5E",
  "key3": "3k3zBuJDM6aBiWLoaTDFuyVVuiMxbhRD5RBjd4gCh4DnYbPnB9wiCdLGVQhUgcDF8HhAPs5ug3D1QD1P5Dim6dYv",
  "key4": "DpP5EGpJYkxi7GPwRQEnq8EtJjKxu35doaaVUz7EAnRReMnKgxvWDGyrCgqyUz7Vs9n7VAtkd3cVZfW7Dy2KL6w",
  "key5": "1wQczvaf2ASRVHYXMq1TcjaSpTyXhLisQ7FTNDMsSzEP4tD2QENiqWPZ7YLTc9dBLWjrKoTYrovwrAX4REY2pNL",
  "key6": "3LM2GovMkQJNACQ5UoGrBtYNKJbbmpYYMWVCqTwCQ9R6rTjRqWHE93rRnjmi3rVMSxxkeJLXH3RRBegviKycf7qw",
  "key7": "Kh59UVXRcnhqDzho9JUnJTmxLmG9opem2Hq3t1qa3uuXeiRG9CWJdfFFuGz8nnyVxzgcj3aGk1zyMG8Hp8MGUdv",
  "key8": "2u5T6kn9uEg8j9afz9K4CJBF57gWpZDnevYwX1WEsiBefd7XyLtzkLu7tXDWhApwMH9vBN2GJMC9kqFBUXiNgixt",
  "key9": "kVbELBDfbkdAXxm4NPT8fzBoomAoQzFpWof4KL21ZBJm9MtCHsnyXEB3trqfoUGbd1TcYaaLPRW4oGbz9tidfUK",
  "key10": "5PeRKKoszMRF2zRp7URkmkpLr66RXNedsiY4sxrymmvZGHsAY9umK5y3fHfWhJ5JPrv93tWxkLaR5bwT56bQWcjJ",
  "key11": "4XhnYATkP6fPG2UnVuSsjLGMSF2QfFoh2yK8hMiw16UeoMCPNuiaoZ7SJse4MQteb4NVHY58Ny792mtJ9yTRB7p3",
  "key12": "3t2W4Zat5gtdz63RFFPnFxN1cG6h2QQ1WH6hAFqR18SogtRqhChXpgby51JsKgtPepKvsMgBPzeitMsEwShRrRXc",
  "key13": "65xKzsR8qM9Lr8aw3pK3A5Zq7ZLGoATf3pryBC7wKC622GqD9dpdtT8rPW26Wh76jG748iELR9QsMuJd7gAkSPj3",
  "key14": "65efXyfcGdimz993BveNRvmKD1fpj6rABjLFhofWuSPS6t48LdT2c8HJqyAxDUU3ken6VGFDSPKGT2Yng2cxgHH9",
  "key15": "46Wazj9bC6UgKqrWag4VSbkJDoZFs5HE5mTe8Q3LQ8RrsoRLBDnhYhXuWLwbuoo2jyurXvpo1Cm8GiMAZubxEkiJ",
  "key16": "32nNhD55bQThDUuDWXUJ5do3eUJ7qhFiEyKNawAHeM4Jbuqtu7uXbJrWq3PbRdWvgdbn1MHhFGVCpVVv5aC8rhkV",
  "key17": "4yfGx3VYNKvDHyFcXcb1CW6XXMRXsw1kLcdGP3AzcUESMqHRPcKnryBzWyjPd6kTbLnfdbz1wZpDE9QCMjTpfBdg",
  "key18": "5os5AEjmUbRVKwWiSa7s3APrz6SXP6owHBUKWE9HQZCSdprkbfqVxVqLssnitmgCPinfJE9UmwSXKgspjiJktpTc",
  "key19": "2Kc2Btc774PLyfPbZiEMZewTaBpjKGSzAPM9gecAoVyq5h49FBZmFtQbcCdHHbbHSbUpfh4b2FHSqSEitdZwCxQ6",
  "key20": "4c65tKL7aHSeCk52xzXnoHEUkQa2XFLxCer56pGRSjDXXpEA7868cDm6EyBbKLydN4NVYtVH8mmFCEgZqT1inRrV",
  "key21": "jtmKq8fXVDK9SYgNwTvz1kcbKPcySdjHgsPCe3c3B5T4uvn9MRGR9fUe5LBxu9yS9Yf9WwAzXX4FuJU34zsgrV7",
  "key22": "7rbpVoLBEfytdBp24L1TpuDR5QXWFUBJd6mDfmYQWyVQQx5iFmff2aUqg1YdmgLT6kRXYJZbMkwzXQJAqbPe1vR",
  "key23": "4ENZPEWxnPvX3nXJWy7j7fFcByFzGwhoyY1KBhaWgV3pmoRJ5suB11giEMFQo5PorCebtfKfFzCjvZCcj7QYyDX6",
  "key24": "4kcFDz8QipdE7keS8mQ9iUiH47B3kM2QuFoz8L7t4bY76qcWxkEv5ZWdBQNtzTmrLu3wgMuTBxnu7FMZSt7JJz9S",
  "key25": "28RTRwtfXQuNcw1nLKsB9dmhh4VEz4SNHbYnfpSD1Fa8haDw2QXgqAF874b7HRvxXQuNo1dcJXJazZ1jfU2hCZmr",
  "key26": "2CpXzjh88sNE4qdYv3CEfxHv8nD5yJL4K2efhRoiHYVTrNwKRrmLz79B99zkyEUR8CzuMwjhDnyoLqokyaZyK7Hx",
  "key27": "4L4EYutaAqMEdgVXvC7bcCyhBaVmBtrck6sPzV5mK2VD3dC7VCJBzR9MuReEj8tzsVjDBpK2Z8BmX5DMdYf5USvu",
  "key28": "3ewXNdCsLCVHzz3VnCDY4qrtt5qKyZi2rqEDFrZp1ceBN5Mwecegavrcpj7dE9WYjQrmqs11VkjgVD18xAZaDEgo",
  "key29": "zqvKMGv8aLHeD1FoSbBgv59NYNYZhnGrmvaujHG2W9xMEdGNSyQwGUXVwBq9EAJygfiWUdY2LXSq79qbHDWXYtN",
  "key30": "29fuDobony8kdfYeDyL8NsNntnk5YSuizSEoksx6AxHnMvzjdkpxQ3Uiz7iVyLxVEPEdUths4G8bKf2hncmJy4NU",
  "key31": "5PEkEM5xRXmWRuaVb6jg8kmrVUomLWzLp9vroRnsDg96AZsdiQmNzaGihLF5jdAcRB2KXMJ57ZrofpUu22Jjf4EV",
  "key32": "5ATjkwQ69ipQCEWrStUTprdmboiXneVVypJWrshCRPD4sbqxSWd16EuCmLdmdGrxHCjhZMiLyLuYVBEjmUh5F8rm",
  "key33": "5RoTbPPzoVF5nm69UVqATY2NCQfiMTK2pnhn4BggRbELq7V9SP7PCVfQLTaXgKxnyaFQ7XVqL99pMCiGyHRShZhf",
  "key34": "29RC4zLkUVpY6iiDS7uMjyzj5nJiSWA91jDZafwm4UcqXPmyjQJZRsf3iNXJEiHV3xzzraiVWKS3DB6c4ghXFT4f",
  "key35": "3yVYqtWHDM88wpqyNGLxqrumBxjuuYoPaCideMfmrrpNuvXeu3qTnoPxow7k5HzraAXrKm3kcpUg2q83JDw45FoY",
  "key36": "4gQgU5Z8swjYGhYx4QHqodYw3WdpXfFePpLeQkCNSqop3rUsjhYMGzytdNyBgEFYebF4hBUjbc8xVsR7oVTUwZ4x",
  "key37": "5xLDfFS3UZXkfRTZMwU7GfRdCUePHdKfMDFtH51JbttekbNbLHXY2dANWiydCLDBTeNwW3h72o6uCCNurFBdWKG7",
  "key38": "39zfnwoXMakfpMoQiXFHVkoxUJ82AzN6UuAowApBH5JGf8Ux1ryErpjnBdwArffj4teE77LGvdvwQ39cVEhbd8nj",
  "key39": "5hXAuCZb65KRj2nQwxuNp32WMDVjcwwbJBVJL8b6b76dM35tdDSvj8C3kmJ7iqE19d422PFd8q35ntqhRM5Ddyny",
  "key40": "5SsxktVdU43jYfcYhQwrgrcFdwtSXuNFaPXyejHZr65aJNBnGVayvWSRA2PwzCXfsaMN6zDeeMELZSDTbaJKE7A6",
  "key41": "63Gkurq7qc62YLVgd8pvh8p8GeovbwgYuHZrNou7Zk6oNcJR3r3fCXRbTA2bbXsuA5MBEhyB48LDoDoiSpRpTCuB",
  "key42": "2xkthddzzaaLhLB5LPrZ5j2FeFqVtUVChNqwrHShM4Kum5UicM4trAgv52ZuXL67iDcgNZtatdYDBFK8WDnSzJRn",
  "key43": "2wq4CXLWYntbcsRPUpRiLVRGF6iZ85CMGcK3ncmuhoWiDW6HbaEzHNiMLBaCBrsJgkiJsXCuJu2zPekWHjV7Nhau",
  "key44": "fNJqn7iM4UNNn62Lj6DEpfsbhZSJuwoxvfAW4PuXJqFmGgPDMdaYApTHrWsiZri6WsMgJi2LDrGEQdedFzVjPMR",
  "key45": "3ays46yrmoe3XUHDJbCmBKp9gE9fn4WLnqopLC9AjWfaYChofVnz9iaEytzDCvWYYoAfHz697hMQkcziWwYoqjmS",
  "key46": "3x4HkjxSNYK5A91pVHbhaqs1ibK4E8AxXhNrmFmLyPV8qPADaYwuKJQ1XHQ8n84MXNZtmY1SZgjH37mcm3JrA9Kn",
  "key47": "UCa8fecEjeQVS1kcxj5W9ebtUze25NgnF8VPPQ57NHHE2GhRDFhGGUKjTrw73dDL8NNB5R4UVC9EyqcBEUsbKCy",
  "key48": "45geTfKRLdQNVJ5RtYBA9pBgbN4Q8v6EcvgWcPeyPnDRSo8QgKMraP587SkGBRiZVH2A4a6dH7AtGBiEUvLDrBWL",
  "key49": "E3ixxdjaj1Xh7NdhXd7sFBjJ7x6aeMZiHpLXn6dUHdsDpV1nuvuJB6munjd3vy1Fo1o6ubYVWncq15ytQHB47VJ"
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
