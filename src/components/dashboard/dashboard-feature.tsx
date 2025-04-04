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
    "2zK9azPWgNZgME53Wyj6KNYvmkUV2WujbapMSiACyZ4i4SMz6E2WA4u6pLpZidzinYR7DXqv2csQ9mGaDJtEzNrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxNbYcSNQYALPwhdoxZgEjHBJAcRpDpMTpKim8SF2AwQcFVdJwCAHaBrHwH5MrGVtabD2fNhzu3NyZ8197ZGBez",
  "key1": "4a7rTBAdNRd6h3oKXNE1y4QiVqFbsczyS6YGtkmsXwQ67GgemAVuwCxfPRMon2EemNQaxbMnpgcRBJacbZB1c1A3",
  "key2": "5eXFdnwHDEuLhpSZ3h3Qwi29HwwyA6PkPjNJRPPeJyr3EMuHiYPc5YSS16sv9NTs3G27BwnEQiYVMWfCVa5dy1Ya",
  "key3": "5vCdH4Nv7RcHbggHCLysZxEzqQdSN5Tz5oQYHdqsiT1uXiXibD84P9VFwvjUbcnFK3njwptLPhR5BZGESWsp1DDs",
  "key4": "5GN5Rt2ZbVEoAcdUVGAd4dwFCuKTmtQ8Mx9WR3xkSmnHUHdWuqVe35JxwdVG6arddUWsyYCriFu5TMKer92PnhRa",
  "key5": "3nDHUg4WjdcRbFotzRL7EYkdeyy1iA5CESe6zXxUyuWLi7F83rXry62LMexYZaaRHwdP18my6TqoJcDUBCx8Uo1T",
  "key6": "4tNWREWP89FQGV6mf7HqhpxstSaALFjXLQ22BPFrosDgjXPSfeyfy446PgKLRZVqzVabRfMeBNYxYYW1hU3LpdF2",
  "key7": "4ME5KHEqvhwQEnpARLgTyihTdbLjWU5WJX4K9s2oB41D7FahXS2xQkqoQUEVhLYm9VDhKyvqzRBA4tZfbzE43mWP",
  "key8": "3pSKBQ2YdFeo3kGf7nPyYadHDajLGRHpTQQFZQQurZeimPs3sLVL1TLMBtA2J1epBn1D7a17JqQ1vEjankhtX1CZ",
  "key9": "44ohJKusasBP8S6JEw6Yz9U3JB7X9uf6Q3Sxnuwhw5BAbXPThgrAmXezJYy3AtwixYdCXQ5a9TbciPDYHf2M1dCo",
  "key10": "62UdtqyFg83o3HwewsrTUVGVQuPXwrKYhtNbwWQsgCFHBzsg33N5zw7yw2ySjD3v6rVb6pxqp8UxVc5z2opGr2tV",
  "key11": "2BCghQTBbxhk632JyMiCTKVbWmoJkLwTHdzDoGEsYCdWdcWjAAvd23DZfPRcue8aPB65xfsx7UU5a6QQa3ZzrJFg",
  "key12": "2wxNHzjEXZDWP8ipUsvGHzzaudhdB5aRkecgcuQs32kqygNx1YZeJtMohDnMpdKncDRG4g76qewrPyVsiaFKpkHF",
  "key13": "D6AUu9AUqjx4XnV7iW7XCdt6B5dYQs98gayiBKfSFcZXD2Ro2PYDgPfb3J8u94uJK9dcCMgu2n23JMkmuDUBpDy",
  "key14": "2CKRnjei4M13yb9xWjavYkXe9HWNRapmNg5NfdECVPgugUovaowgKwgdPk3DPi2diPDa9GvuwKgXZhmQZWY9PqNp",
  "key15": "3b5anY8uoVRRq1gvzKvb23Szc35ARBj9xW2NCsYEVi6jcC9kRJJQktZwiNVXwjrxt5uCewV2gfHymD9dEHdursuT",
  "key16": "54nP3c9ntpM2wfcoHweibTqtVrBmGCKja6ng7T7MmttJvBekfWTTMnXtpYSKUCngKhoM6peLpAGuHUGRYc1fhpkm",
  "key17": "YZv1Nfq6pPY1NCwrmEo9YS3iF78SRmMBFx2zJW8rdxu546ksgMHmQyTBfRjvMrqEMDQqk8pCANsYNBeS5Q7Nb8f",
  "key18": "5Py1VcUHronG8tEiEqgBwzywgDS2TVcvT7gkLc7PWu1eXCDFnre1JBUyfM5hfdb8aMDGwKiHqeS99UtkL3KmE55V",
  "key19": "636ca4rrumQpZYfm1ejyFawWREyEVPs83aE5VgueFVBBVUbWeTJto2omy48DfURqkLHnj3Bs73QP62fecXjdc6Nm",
  "key20": "L5nhC9ydq4b1yJfQx627Dn4RFoJbLhRJkxvsXka35gZVewExDtJ3XfPchJUXkMch9Men1JTBAwqYUqetA2tHTDX",
  "key21": "4K5HoHzkBtk7g2GjEytwy8jfMdbhLZv3PnycP6aTpp37hTzy7TjSK96swYcmWLRRPpScXXgvzTBVxapSRLvF6aF7",
  "key22": "21FcT3xQXFDSdYitWnvHeKSymBseat7y88QbLuxinnyEotBSzVHYTWM2P3uBahy2Vx4JCTK3Mqqj25hN4g9rv9id",
  "key23": "4XbrorGAXYNKApqxrpS1NZ3zuXMXBWx3bSMa8Z37WXL8k7QdqHfhavo7edQkW5Y2vnVMCTN2xBEDvBV1AwH4V1mi",
  "key24": "5wUXMCLtSU3Y7TdFM7XyfHMGnefSntK239AdjrbAJ4thmqooH1MxwMMdN2GNJJTtgQDLrtiZ6EdZFLAAn9aNm6sn",
  "key25": "2kyWoMw14im53xCGUhfmBMaJfzYpEy2nQ4RtZkLVkREzt2GEnRiJ2Ky2pszVWScyq4b5R5bLm24ic95uk2aMWZh9",
  "key26": "2rr9cmh7mBx2i9LsRRS26M1XFSzfCkTpDaiiajk35uLQhAG98cKMTFd4e3fi6kiLJrYpojcuuyxchzfdJo1DGKuc",
  "key27": "5kECnF7fXkedhC16uC6V2Au3HjWdHxDtrPc3TuMRZq7eVXDRKsU5zhco1quXPwhVv25x7zWEzniVo9nvNCDUZRCd",
  "key28": "3noyNrnc4sLDMwZMe68GriTbWdJEkBY64n7XtRmtakLaDwsLSVAX8gKgNBS8ZazmWttti2QaKgBuxpnr7HNmG3oG",
  "key29": "4jPpeMHeq7r5UHdJ272EMRuJwNEZYf5AZ7HTZzza4oTysiMCArpK9Pf8KKyP2ZHjoPnmonAAhbGrTSUqdM5HsgnB",
  "key30": "4d4FZT6V2knZeJLpZwnUUnP4bSW1kLhmJtFk7MyGgXn8GPoCedAf5NEF6XJoVM3Ps1D1kCpnbW6frsrwFAW8AmzE",
  "key31": "2odVEo13LKXmzTXCraPD2wUrYvP8fzsRaGPPbGAHxjsvysTWmp7MLBCfN3tjmUnKJnruViyYmCNenQ5HgXePfcTP",
  "key32": "4KeFs74tpAL5HkBKqS2qAJ4eoqGcPX9udZQTTw6piBPu6bjzt4fxKX6yQmtbbJtwKQMEGf1vxn8pNAQQDCcTNB7x",
  "key33": "4CCYipQgx6Tu7D1YvDT7nkwdX3Avu2hL21haS3X8izWdKrWDAvECtfduNkH4RQ8GT1K74DFsQy7j9RbWJYwt157f",
  "key34": "3szDhXSLBfAa773nnNE3G43G2PAJeCYoGRHtCn12ex3knowM6GY2N1ntkRznxBMew9LT4Fg8vFfM25UpQFHSHRPK",
  "key35": "Fv2XE9ZnCFiNG3Jv9nrEiNW7f15mJ2y3m4Ydz9h4cwYUtfqnRahYGsECYvPcG3V5VSMYQB8QYXt37PDkoybAdeq",
  "key36": "3wScHRtf5si74SxNMeZ44EeqXJVhwCancwSah7Kc7uXDNpfSgLsCb1Kqa4gRbZNfPEYwTd1i8u5en3vLeqxnMxXz",
  "key37": "473nDeFu5rLmNQ2Ckp276AkKEhLLtV7e2ngHYcsYLkcJNyn8GbZehj6wq37a3V1rbskKB2czpfYzJNGRQnYXofF5",
  "key38": "34qDosXvEcsoupqDeY8XiLvQwMvv2MJ8HXKwGS4JUfQXk8HPzCiFuxHm4AQWwCh7UZfeiyWfFr3HybPQ5XrT7MMg",
  "key39": "4KxW2Y6s1ufm6RXQ211HVvHrgdZqAeRyGfbUvEYPhjtT8nsBmouLSHWZiLm6knnPUaRsVrJYDTE3M7GVcdVPBzio",
  "key40": "2NunbVbFX2VwFjH9tFV5Cm6cgQuUpmVaC5RQ1gnGVAwhEEhLa8TsCPQJfiBW4jnYGqsL8aJaGJ5sWJA48wDDW7om",
  "key41": "EjwocsTr9XynYncV9WRgdnr9amCB4t5rDXXo9V9FqgpajqN6Fvmu6to8Www5xJcpfLr7HuxEoej6d1z9bULsMf1",
  "key42": "AwTDrL9P8DkLwFz1GT12tw3xiY6JRerZoeSCZj5moCDrHzjBLeusqADePAm7KnbzEtJWVcQy9956YeWKuxq9ZGb",
  "key43": "34wAMewMpAYJg9KPxviGa9eskLhKix6pP37dJws8JaqqU9V9Skc9i3PvH3JsuJU87z1VX4CLWD25rYSLRNUY5Qjc"
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
