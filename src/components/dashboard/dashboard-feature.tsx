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
    "544F2F54A5XhWUdgXwPJuGiLPFuJjA2tizVPVAVej5HFNcf9D6HGiKQxvxiQMhpyfY26ocoAkB7g2YGpDyMLaxQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFJQXgnZ3KSxQMAJZzGFBRZgGSgLhrZayYxMQwmaesdNVBWsavgQKaMpwNTrGpaeoyNfaRzSwutmpRKXk4F73fz",
  "key1": "2zoxz6RBAcfCqyvShYEXzxquH29v8ShSqEfmiXyj8W1yBzPEQPi3ffaGsggugddtWFozw6jGkBVrnyJ2t8uJgsJY",
  "key2": "4oc5B2JAZ4Tj3Wxssh7ZcouFzb8giLZW9qfRZGMWAvcipaUqUwsjdz5etHAUAFUnkwjqMu9CrSeCuJn8QNSNrdmu",
  "key3": "4JyxppRJTC3VkrsuJ9icLTS8XBK9kaPXPJ8W52zkd6bqxqfcVzPG1GS3BhQakuiRj8vv923CKi7modVDQqwNJr7G",
  "key4": "cNqkGYpavGCqv6kxVapF6qPhV1zi8e6eygFYG6QNFK3UZ5LmHPE4dGVfQn8N6mSdoueDS4wzAo7ZwC5fMUd6qpS",
  "key5": "2Kn76Awnz7M6728gSEmKnbjcpdYVjxQySEnRgaRoVDFGGXXAfSz6eFFquEJpEvobRaHkuKRSMZiaviVSXGxnab2M",
  "key6": "4ppmSfHbwEmKrCe7uGiywpSdbyQRXUWyWn3HH4C8KJ2p574rnhtW1EQpsGudpooLnYArWVuebNqFEektewVBx6w",
  "key7": "67hiaVbYcxXQnkNXLo8exDCSzyG2QfLgrEQpBGofERCNWtFKEDNS5d5XAYqtgtLXMxCMD4Dt4uVnsqgpXXxSYbR",
  "key8": "z5c9Xbte4SBiqP3q1R2ru3t1DzcgmDXsrZMWwSA9ypSRCFrYCAbgkPh7rtiN9HG6pMJmBsskFCnYefBeNNfWJRw",
  "key9": "2yEPP8bAamzkEqq7nmAtaZZmWXczw8D7H7JwYiP4uwKa6RdXZDEG54eG4B5qspE854yKwMLojJBB2wm9Xnhyu6oK",
  "key10": "2q5SvPfWCmiJoXBH3WipLfi8JySabXr99eFPkisxpbBGqJm2PYDYHYLVh1EjhRq1KdnbX8GkF96GVrCmpTJk99fw",
  "key11": "2XoSMcLbQCR5neWGtHYmw3JDHYLdEpKcHkCAthnx6PDDZPyPC4ParnNcxevDfUzkMBMPxLKzwYqKsm1xTH6ZVykB",
  "key12": "67MaLbdxG1LUiaF2jA5LHPFMfEnuuyuZHkv8Tr3QxZZGjxfcumv1uyTBEHm95E36SEq5E291t567m3e7WQWs82cb",
  "key13": "4E5HypVSkB2WA9Rjbq7XDDkPCLWgsaR5TUNYkwTTHisyA2XziwXSTUNTrFicT1hqpqUBhuVcQRXTnMYsbWFm5kEN",
  "key14": "4c9ndvtxyWTpu1axid7hw4xWo3SrSbrvXtS15yVxFuZAk267de7J1pGPPxjCbhppdrLzAuf3YhoCeUnFC9uvjozB",
  "key15": "xaze5Szm8wBcmvUfR3Yq6cBr2tcdGcHnW5VY5ARuyyKmFaVFCeFgB2QpEjwP9gVTogMpkiyDc8pePQjdg9QZBSw",
  "key16": "3WRntbYk2Mb2LktM73RToWgWgZohF7qMpVNUdtHr25SzscYgiXEvdofJyrYfUbGPXNVV8ajk3UiCLXcs74X7o6jU",
  "key17": "5e1vNyLysxyzA246TWbbDJk7hyU24RA5XkNRFYb1TsENkt8VdJUsmKXFAQKrNaAkm6KvTF7NtRGgEnKYoBCjHr6w",
  "key18": "4Bdz6HuT2RMS1MdUAomfJY4FgYk3cbJfgFLrzyYQokTuy6XYGqwAqkh2jEpTpCQnC4FCSSMSAn3Zko11sCpJHkix",
  "key19": "3n2hExrxgLZ5hmEFzqyVegpbWGCgBoxmCADXekRDEB7Rd1tvJYc2rEU3ojCWWhrjWz7armb1oXvsRzasP2fvKBsm",
  "key20": "y18wCCEgruHxYxhuqveXkF1Kzhg6a9PxwubXs8wVjTBUUTGuVHJXrDiYyRWrXHXsBrX94qTFwMW4orgC42D5ecz",
  "key21": "XHjjK2pK6SBrAXFFDPpaEyLcPaG5GHzxH8TUzrC6C4AQkdFHEoYhP23FUmFDGVNQP3vjfzmENrzX7z6MfKsD4Cr",
  "key22": "5CpPar9DQ1jmc97SgBHP5499k7kH9f2DTdkMgE7z4xoYCj2SY31FiEJHJ22z4kzceXnkyEwpYBhHbSmGtmnsLnTA",
  "key23": "4jJHwtGbponTkWtnBsjFZusieFUfn2SEBdukWAbs21jeyZ4bKTVCjWc4vqR8DMs5YN7rtHGGfeuUhpaEzXzFV8jD",
  "key24": "5dMgkA1U4KW9medeWkS8b3JLfMWES8PbvJcEyqyHVzCy8ZRyGL3JHLGoZDXPkDmCBvXuVBWtkK1Vkde4DPFhfZTA",
  "key25": "4ZJsZGn4Y5gEP2cc2DYUqGE1V1aKAjQGxrZKBLbvvrygdy8WwbAKyNx5p8ZDG8Crcchkq5VswxfJta5JxsMzUP8N",
  "key26": "5ixT1FPZ9PBz2VHnyMLmmf6CKFx48egdbcr6cU8d9miSFewjhJY8wzjNoV2RFHVoDD8BjqrZ6cnwfuGmSyW1neUx",
  "key27": "4xqMidzSQBhDeh5Zjg4U2f6TiAVafh8ab5tK1hoUpDwVHpyXUd5V2hWGeJB1xWWTRikMvER4ks1EvpBWqzwh2f7F",
  "key28": "MHYgWrY8WtgFcYittww7r1jHRXK2ryAH7Gmyg1cN8q3bAa8XZomG1Q69AJuTidk6NCGvVM4mDoCHEAZWYzWXY6E",
  "key29": "GSpMpkgPn2JE8k55FZyt2HNbZRuYw8f9iemLxmSVmkAKiWwWYPTt4uAAKbU4rj2qaY4GNRXknbKje5jCsY16jPw",
  "key30": "qaeik3atY9y485vscobmhtLY49B1TKvRj54J6AEz1dnQiKZSKdRpNxf1Q6XSSgpfF7eCRMaTYMraBe33x8u31MB",
  "key31": "24kAwWdDDiUstyXNpcWy1Ss7yX9zhNo6Hpi3UFbpspn8kstzjjBpUbZVxsamZeYwdSzRXUVnH4XZt8iozLFPRemj",
  "key32": "5ypymeAWoQSjnDqXWH5EYRD822xL3tvQVvzxhvSoQYweDHFGnGZNs62ktNuikBkqc1WRsEqwsxdUbpQk6Mvw69fC"
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
