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
    "4Ma8neMpJaTZ5Pa7hE8AmAHBJC3kX9YtCney5QqFpNJWBLc6kDZ3TqpxgUyGXR6fqVmLqbYhYMMfiM1qTaNxGaNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8NCQLdhkPLBwzSwdJ5BqthFKQWMWdMeEqEnVhJcbxDjzZfRkeyFjdpP8xikpBhU8Qk8mS7iQCknUdBVDHhEMJq3",
  "key1": "3vMhMR8Pthg4BmDiPNxKmDVktzXHJGEvZaBqUuVdFBtRCWuVYE7nUxkH5yztMTpDFnXCWjBPBmzznFFf5D2YYDyN",
  "key2": "3rpaeFDh67jMjBoutRxVnEPDDZ8k5uTEQBXxUe8UBW7gG7PsP27S7JXSzzxkhYoRG5pozgTMCSxtVfoBuGmewREW",
  "key3": "2pq3Nr2upzdJQhMGRzdaHMr6EupZxTJCcKwMefqJauDWW1vFuhPpgn9Rdd3RnEM3cdrLUYTSCUePf9Ncw29gdWwM",
  "key4": "oYZrhQnFov7xTnRxbk6eiaJzjkB21SZ78HHQActxYdpRLaQtqafuz7Hvzt2hCngpwnBN1F5PTBS7SFuVonSaogn",
  "key5": "2eJFVNVpE6T2Rh125Q9oQLWF5ejH21JJUb4YeuwERX8rNgmbj8rHShiVJxpbGYJTCvGQmY3G4L9BMq97Bb8P2vap",
  "key6": "3fhjj3LHbWnpDK3rWh3e7uDkj7VJH6f1YMbLwoquJagLhhKg6e5LQwLgTaMzjFvoDb89iHvUXe9tH27cV2kY6aYz",
  "key7": "61mojRfPEfb7mWVMeFAje7J636yxqvc5Dwq1Y1FKTAjx3yLJvNgvirWAxHAUn9RDU5S3HKnCQicuwP4tuCsPndEb",
  "key8": "67SGg35WpADFqFy33Expy6DYsC5aS2fqAX12Ue1CmSwMSHTYqFUjgSrBECBJgqENbhnQjKyjbUyYJ14e1x8ZxdDg",
  "key9": "5UcQGccKsJ8UMmuAyNPDkgAmVEkpcpPrEieDvJ6gk3Rjnjr4qQMSPrF6TFQLNWKXzsdCwckmB4HEUmb5HSyLE1Sr",
  "key10": "4wginizrgfQyzfnP7PjwBKxzo5DomMCAVEQnNtMAYWUiDSsCVhsP1QPC3mjtyRDWMRUdD94Xjpnh1umQmE8b76kB",
  "key11": "4SQAuCj9HsWyDhdB6sizG5pQwvHFaZh9e89zqqaqGtENH1BARB8dm6iV3xCt1bjrmcsPtpvCBPCi5sCX8haGA7so",
  "key12": "3uiECe62FPURwD6akoxXbmKq8A6mbEQkLpDg4HoeiXum8DfVUPcxM2qm4Spu5nq3To21MWAmCoTpyfCw6LmX6FBD",
  "key13": "5nQYW7FusSmBaFZR7rfs83VoPn9sAoAGfwdxnF72dLF9uNPDWkw9rRDuKZt3vrHnwZxJXz4cYuwUXchBDHwUCXoR",
  "key14": "4sxKQnVg9A2qYoJJasSvmXriGCxtieoMdFv9CC1ftdNDheC1WQoMdAmWadQBVdRNGWX3GUzjwB9VrXA5chqDwLqW",
  "key15": "65MDTdracfPgLdGSiRLAcZcEtfQjAk56ncGGo5aaJ1qbkmCr1uxkBjGVNwKvy7Z4CwYvCMkLUyDfzCgRKTystt8r",
  "key16": "5pFrTS7CxquwpgKHXEV8r8XHF3LyvzhWJzuE8DR2gfrx99vq9Ng6wKhmRi6FsKLBRfQDrT1co9ytTsitQt99Dgik",
  "key17": "2inkuewXvKQqNTQm2Gw63KBd9YZZV2czSu3qDcvPGxbX1rExzTVju2asHEtvHPRe6ZtgP575qKDGzUpNA1NtRwY9",
  "key18": "5WJ6nxh5srqiHz9QDd7RavFc6EPN15F37GnoSuPXgMsYTR6LBzjZJapdup9taAfM8cpRXh7599sbSAtYxBjGENUF",
  "key19": "61zY69ZPAzvaWDUUARacBDkBDjRfQty8vwEVjhtPk3BFcaeb5Eh248XDHVwAicZjrGg42Gex8ZQURJSivDXU1MaF",
  "key20": "4raSzs9mM7r4naevokLBmhSJm7Wm64GtgyptXwJzcMd5H1nY4eRYbmqXSuAnTF8vFLnew1RdbmaTw8DyoofebQ2J",
  "key21": "3YkxB2i9UEXXVmcXr5huJ7fqmoQcvSbFD5edegdPKqk7SEn8PKJEPe39o7n5JA1PsAWHsvMjq1vCUdqZ7ukJeoX8",
  "key22": "g2tSDtVyGn2ABZC3br8wUkcn64tAkzbwXt6JQ7DZuPKP7nL4usMEAiurEzyNvQwTGC3DX2UytTN9YwXJBYezHNL",
  "key23": "4paeon4DMvYLfXMc8yfEwFJ8AcNQgCnPUjgfZw8uc4HoLHETtYhjJAAhqGkKZrdiNXxrk7yQqzxnPsBXpphSJn5X",
  "key24": "5KeLFuvj8mbH7GarGnMhCtn3u3YNvkFmeiP1GSrPo9E2c3RsQNjFMn2S1kjd3gWCsvsbPvMgRiKYAgkcKV3SgCNe",
  "key25": "3yHNXQ48oHAXSG6ddfjhVsCje1kchKuT4jdCdzmCwEMiShBYoAsiksmH71R95xzCDApEbsG45R9FV4gUzTWtVETS",
  "key26": "2KJj7pkw94j9C8uPnnKWFGWv5MyLWLa3MmKE79g1TUJmoZime9TgQ1umLy3qtZ7EdE4XPDns9w9eDiWbGuqCmsLD",
  "key27": "3wpxcGFf4ohhgQYaqx3hKH1kLNg3ahr49Zrzs1LWiBSMome8J2T79f876SkjV6FreAbhei4aJbqDZsYUHgKRqbGP",
  "key28": "WgVv3XnXHA6fL89b3R6iNMKfJ5mRqXS58P192daJAYL4bd5ZZ11ixoCZFVCBuA2dLqDuUCPY3LNzeaR98UMgdNu",
  "key29": "ecSJQDZZ11wF8VViHQdQBLuEVqKouByS3BwB4vgcHCcJKntPxQvyPxvgYTmMYZYZMxRToeSqQrGTRgSfSGdtDYb",
  "key30": "6WjXB2idwtFrAhQtx7AvqXC1VqZwpSSrFu46ofSsDr5t58ojvzybBC4DcVHAgHTis3bog8hfPPkTrqry5CrVi1Q",
  "key31": "5vyX8aCo9wBoZrP8a366PPKEF9QPURoGHf4W4HCDPMPT82vMEVcmJ3W8wpii8MXmehzL5pnQh1QkuyAvZQxc7pVC",
  "key32": "2paCVTAi3UzB95DAffvAT16BfK76NuAompVGzMnT17N3yK96eq5eLYNaxKiUgHa1adKJbXXp2hpjgfqFcLrYEWDh",
  "key33": "5Cw9n9L2115Wfqf3efyiyYbM8RDa5jQwfoFhhXu5rKeSBFaVaVHmvodKsc4Fbr1wsYYQsET1DbNqmuegfmhWSzfe",
  "key34": "3tVGAJYwUxWh2waGkCn2xqofyg7QFBGjH6L9bAC86zL1aiNXysYWbS5u6Z4NdQiBPyPov3opiQTeTo18G9XsjhRN",
  "key35": "5c2MzqNQ9UYTKs9iarsvc8KpqhHQ7TRJZ91kvFBpYdMqggyMud9q4WnpNLwZP4TY87VnDSYnRQtgunmcpAwUN9eo",
  "key36": "2rY9Ujc5jroFtASNzNkBdmgm34hiPJV8S6fFVQ95Qv6GkRv6isVXm9t66KEj1dHVhKao6wQ4nKcc6b7VpYNCwF3Z",
  "key37": "5mVyPXAfEMrAhBquJyj1gKMQiq5u6vRvKSABZkuX5ucZ9aZqcjPopzmi3g4ifi7ByE8pq813WAqaaYaxzcLxZt17",
  "key38": "5hAVaHfdrPgaMFCp8p22Yw1vJnCYHjXvCerFF4cnZsquBGWW8sMdJ2hcj4bbiLcEWvVCaDKtvicd74JjWhuL5ngr",
  "key39": "4ASwQQro17ETnftMpnx2bDvecQAz47JHi6U3XDVNhiekjrEutXktPc7BodLRrhtsTo7CZp5F55cgAGudozuEWLAD",
  "key40": "3wfdbie4LRMFHTKog8AQwA3X2Eon4qR83SrNpqzoidKfwP8UkMZU9pW5vPCFdzDQ5m9HCpWA65MjsEkJwsgNV6jL",
  "key41": "3j9vXc9sZGKnzS84dBfVs52tNxvZY6DoCuJcTMm6dzTH5k4uJwy8gfaDEWRwuLpVY27pM4SD4uNZhyQUR5uV41eA",
  "key42": "2gSqJm7DhQwRV7Fhwk2uFY535SkpBYZhfiy4VMJoiQFakhvvM2XsijXDR92UXSSL9Cef7bgS4TMAGKNNDtUnigJc",
  "key43": "5QL24YgGe7uDCUjwmiZ1bmt8JcLdkLCVKSev981oQRyP4u4CrrpHQYNqKs3zX75VjL6Tg8xhyPPxrQptRwqMA1bv",
  "key44": "2CC15Ld8Mw8BcRrsPfDct6FGjnkpA76kfUHJiV6pNJLsDzWrr6KjsAHQRzQvWWzMei7ypNByLDNBRGzE2117F4dt",
  "key45": "3aouwp8hvnKbHa2c6Jjmtjgo7rkbXEw2SspFx54uRPh343rbmXs7wJc5zY9fZEj82FNHgr3zxVhfpnzrygifRaTH",
  "key46": "3st2rBDoDV8Thk28MEZQ22ygzLd6B1mMNxAe8eKeKHzxYF1ENqMFo1gHSWUbWgXTraW5HRmcyr52ADcpPCgbVTu8",
  "key47": "LDgifn9ChSAdEMBpvFaKSebEzZNvTDeegQDhSb3kEF2LyuccGC6RFfm2n3z62BQszTM4KPyD1EMf56nZmHXsrN5"
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
