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
    "5Cgc6GxQUr3WHrC7TfuXijbc86cBEswemnXzC6QpfREsACcey8iF4ZqLvoAPeNohFprAsYv1ndPaRWpsCZ7f1EMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmpWmrpCCjvgGTmvHVKRuoeZnGutJyv5qnkgz1mPhAaymfYtbmU1XHjM4UhhSFke1xBxCQRNNuZYJo9vnqd2V8C",
  "key1": "4r7mD48PhRLcQyjP6CHp3V2dGDR1TV9LjM2mQSaDHayWzeWayK1oj3jiDmZnuBAThcN9MLzxNGL61HCVc7duVDKx",
  "key2": "5xeuFwX3K2EdmQR6QrmcfMjwq2NaFd2tnnivpWVLjV88fJYqPdPZ86fbSYWRecxbRh5ZvhT12DxEsFC8XSbMzhmT",
  "key3": "5bBMDonrnfGmBsXs88KckR9n2RUowD8yEobR9NcDtAdEMkfFsj1dpgwRGG2qu1BSASA2WZf4XNcvjfUt3e6PdmZp",
  "key4": "39bjmec2HC985X4rwKqMMa8XoSSGHYp7KEACgWd6Skq5WCEVCh63bHCwUYRVW8X1w1sY4WHYFsYbsjm9T6kmHNcv",
  "key5": "3bhb5CLRB1pmXiVvqSN33u4u5ywTTQBxBWiQnL6J7jQ14dZ1HNVVMS6NcC5WrQUyok2XhHNMYQ2X9baoPyqd5gZ1",
  "key6": "5fWBASdsq8AkveA3MTXs5obF1SjSJqM6AzBv5DTtPWfSgmKfGy8Cr7Er8yhAEXd1kjSCynZbbebN2xPwDkyyRbsZ",
  "key7": "5Gx26B5Z3wX4wbDCTquzrT2Xtrxaf7h5J1fuuttyufGJyNGb1RE72LuBCbgpczsx14FyfmC5aKXnQKzcc1x3PCcS",
  "key8": "GAA8ppERSaDiyQ1XdnP98MsiNv2dGR71q5F1aDdoas2i3un4zTYRP2TaoLRosUvsG9n9EJdcKyVzgxABPvWZVf1",
  "key9": "3fsqXUwz3s1cUGKrN9dQhAxLwrKEKSvjqJyjXwWk7e7bcrm12ZLQbuPJ4NPQpYw9bckhsAgTY5YW59Afx8pYwVH1",
  "key10": "3YEEtpAA4QV9RjsbPCJXuBbUcznoejaPnwcnANADF4uEzWePuTBoyJgvtsDpxue5LJbR1mMAcxbgoKD4y5GXN4Sr",
  "key11": "3UCu7eDwYJHrCNhadMrcR93ejDqTvm8wRXkAX9EKxCso2v7AYt2WSmruipmcF1yqzSWJtWkCNtvBrEJD4yuRJHA2",
  "key12": "4TKpDEz19WDXM62JcfJZY2uQfxWWZRC9Sznrh6nBHv37tbf8khxiTpZm26rmL4cn7Gkdr44C4sUsWJ4oQiZfPcTh",
  "key13": "pqG9hENKaW95mC2v8yffRvt8b2s7SGJjB6vHMpTeYdcp1Ps4cHGUYLzY7yq7CPq5UGbn6LjVmxTKShJjFmLPYkK",
  "key14": "y1HmzeaVg6iJxVtGih8jJoggnSxuC167HyTi47USCVQgXEcG48QLvUjvp6Rj7KRBjCdd9HPnhFKLYfH6ZrLC7e2",
  "key15": "2sveAWhEUucMsRxCz6YEVZBL3LDzftJU1B8Nr4V4xkGrtR9FNXPkAz2g1CwmCR5Yvjg1pp7BHakHuXt3EoWKrL5V",
  "key16": "3iu6WT9RTp4QvHUqo2UGeiCjUzzvFyWSquvQ16Cb5QmfBoEHRFedif4R9tPbc5kVpbGsNkcZJWjf1TTYkyW3HqEH",
  "key17": "JFwViF2LqDTtsxGGa3Bq8UvyFhKxhLxV6rzsDv1F4Rmw6FujvbPV9MypPEKGiF5yKmaRZiJurERpye2WcRHZgNm",
  "key18": "aD5MCn5DrK1Fk6njc8TLN3XRVSy4RPFCBwvugubVR18BXju9QsCgN1cYppFTaBQapdbzU7qvWF5g5wfxw7CMJ7Q",
  "key19": "2b5ou6kwLim8D8h7aMVtVwZNp5L8xWszjS6vW4AdgUnva8og8e35qiZfpukjWWqaa39FJmfMj9by2yKcEmw6WxRn",
  "key20": "52BN2iKYrESu2kfnmmQK7YYGUXa1v144Sd2w7WotZ1CdxCEGFq9XQ2vpfgNaxmvrVi48vH8cE6EcXbixDgaNLX55",
  "key21": "5xBaGUD7gEDkwFfNTHwFqM49hqrXDA7fWVXsysCiaiUnToNuNbGEyVzE8gTe8Dj8wagLb1SBAMaAqmLkTUuovZdc",
  "key22": "7F1F2Nb3MkyT64ouycoXajZXTH25FfvrwGRRuwQ8CDX1cKUgj1JhV8gpBRJVsHcFqXF6xNwWX9gqhJXkt4ANU3Y",
  "key23": "5gtBufVXiYidaiCZcdwik2eyHEMVviyWFEVy8L9YXqBb4jmj9GgRtwzpg6RMnfVfBk6ZHp2PGdm6AjKbTMYaoTwx",
  "key24": "232rpAqw3aN8fK5MgpXvd9mFBq9k6kc7yTJYnNAg77cYJMmnSBAYBPHoRtKftLna1QKCECCbGPfGePxY1RA79wZr",
  "key25": "5DiKmHfgafqwQpuBueiJt3MTQ4EX4XvoFes5M1PzzbZaTtV6i9LdUVf9WvjGHqmRGnkn9WDetZY8C9YCtXpzswF3",
  "key26": "5pMeNxR5Zo7vXGgjDGmBhiCeFEVEKnhMd3mso7krcEZRAJy9mq4uLuCzvS1T2ZWwnsQfFGpbMPv5FFVcKvPqpsLc"
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
