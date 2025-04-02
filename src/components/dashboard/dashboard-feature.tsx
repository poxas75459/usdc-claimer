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
    "2jxY8N6XLnAv3XSrAac1uHC4BSnH3BXuJpBN9vdUXvPWdfAT8p8GDodEMY1w3dGPa3769dodrpg45D5651zGy934"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kn8j1wFQBrjzLXPrAyyYonUWeqr3CjBHVL5TgJi7GWQ7q3B4FZznVNveozjNU9ihqiRjRiQ4iCbVKmi1DAZ5JSP",
  "key1": "5SYrNrb5ZNZJTkPL9uYNQxS1dnWS5okQ5RZjNdGu6ZvdF21MppYmpgytLCireoSQCDEZnbg946dVGjydGmQo9UBV",
  "key2": "4bAyi9k9XKQ1sBpzL9Rpyev2cxvr6FJjwjADvaKuUDjP8Gp8oEX7zESritnTyun7dJpmCfiZgDyRfTKty7GjD6zK",
  "key3": "2WXFy8edCDPsZZk11msySpyQbb7So716eb3Mt6SAJ5dG84zJFWmuPTs6j6icd6cYxF8yKRcgiay14ACvKtWWPFwR",
  "key4": "4ZGcEpHWSSiL1KSqxNxvFshu2JLXaUDBzE4zySLMFCrSd6tDuwsMTg162CtrP4UBsZmnSYPwgoEqk64zgFwh44mn",
  "key5": "4iqxwMrZSUpHrjKK8UBLR8Px2A5Njh998pJFBXCW8qMwDs9yX5rAZSAz886qaqExiiKhstZhy11dYP9xAzpXRmjX",
  "key6": "3sLBRR3idP34dHV2UtJNVGfCN8dzQcqGZzw2BMJ2Ni1NBznHAQnPtKRmxgV197R5M7rsPJdskssKT9eWkrgYiB3u",
  "key7": "2yuuvrZ7ooUnkdeVJgGz7MGX44ATnhmaN6nSSx4zfPnhYzQovvCbR1vxQPr8nFLJqeaHJNZh2oPbsLJC29yvDtvL",
  "key8": "UBed7nddzt3PpMLh4CVTFowWCDyZRnUppuYckPcTYKrVmW2c9z1craL3EADt8HEwRsYBaEFUd12gKrZPTZgFBHf",
  "key9": "43dSi25LhPzA8N6WMXMTZwhxikcZHQJ44XKgnP6EydL4MgAG6HaDjyhvQjBFPG3dbS22uJgFZu7qxufGntYi687d",
  "key10": "LLNDopCbRijbLFX6NtugqJ1Nq9jVrrXVPYgwbjLVvdz2s37qhkTkrEWughKBZPzUATS7CdNcDMm8hxZc9oyVjdf",
  "key11": "5roZ3PBGJmiR4SYzMQibvAJtXqFQ8KHDhBmSPQ8GHbyUZW2xri3LAGGoCb8s4ts8KTbJXwJdhxgn622YiG47d1b8",
  "key12": "3Uk6nfRkJqfRUYdkdSf72fZ2fs2uPvNKXX2jiXacVSagAje436ojKaux5vQ8pnEhsjR5rZm5z5PLDxeyB8z8vNKA",
  "key13": "2soevksvkjFhVJUCE9ehyScZjkcmyZwjo4QY3LEDZJ1XAhcAnAtDARutVXLnxULTVHieQMCVf3tKJZqnZ4oz7cvx",
  "key14": "5ssBiP8DvAdv3qp8pUneji81mcv9DDCTz9GqxbRYAnnUW8LYymgGNhxM4h6dmt2qzj6xaDFYG5zzTNufP4XyBtqL",
  "key15": "47DtXUrHQHa3zdGwf8PiTTBoqui2yspbaegY5RipMUgaK3Xg2v8SssNcbLMNqnw6CaKTeFXqhDypRLFbMzmqsVYo",
  "key16": "w2hDaxkA7fYKo7P1buQJuhhC9yjXWJTpy18nBPb8nirQhtE2Gzo1Fb9VPdV9aWcxfHzY1FLjyuqMRpJ1tSdw5UJ",
  "key17": "gunQBt9Aixh3cqKAx37G5CeHgp9qHtd4Eox4DzghrePrWucakqNXmgyV6ZaCWQZJmSXJHY9MhrNDcJUrdyQZQUq",
  "key18": "4JicVvH2NhBy9eDoYrhddxkg7EGNiDGN5oZ1fkk1ZLP3sNmezawHuQSHcafcr3UMNz4A296pEPmc3mXTigqtzg1A",
  "key19": "mR9iMKyrMtshsANSei7nF5ZFmuFu8zAKmgLBQimqMrfmRJBePkNK877jmgM8S5G4atduFstxXi4aCkwPnoL5Tkr",
  "key20": "47aDqFnsq9xR5FzQxMaATT13ZRySPnLbgqoNdx9XWKr9LXdmZZFfVQRrDUFTGXP9PYLBDWhV1NDJNxnu5Sr6SwSr",
  "key21": "2mpQwxJMYVjotxU3whLMtt9yTbrVgZiwmsJDXXhA9rpMitrXiCuMRv4NsA14KbEQWx1i1kW2bwgLErggMY95xDBj",
  "key22": "2iBWVXecj4frnzYRy5YcDjn5oZjhkAsU9MvMPibUocwyvDz2BFZ1uQdMSqNFcbRHLTbPCJ2bbaLMQgQqQPPnrcdZ",
  "key23": "4f7o81tVmzmxU3Ey2tRzy18UGd2kWsaUzCDxhmNTzw9Ga3d9DHGDv3NiZdUheiPj3sMFqaaVDEZqwhxCo8Duqx4",
  "key24": "4bYY39YhuLqA9jDES4tNqeDQC1viz6GJXtS8XpGsmUTraTWs7eds8Fmh7kFuoc964h8ZRontdoLYg6n49cJxE5Hu",
  "key25": "pZyEbpgRTNTbJzLWSp9175ZYSNRWkttqn1SixNZN9c3pj8xzszV8Gw1b6vGgxTLgFa72YQXVX6CPLGJmDVi3NrP",
  "key26": "ooBJ1wyC86AgtUxn5qaa3STPHbnGUDVfekvZU9mRTLfCdtXD7RDattBuQH5hThbm3Yfc9q9oj9hJ9Ds7JxMdiJa",
  "key27": "5fVDzGHZdtTts9iAyLaa1KLRKvy9jAiAkDPUunyivLjcLmoXnYYGdu7aAnafENQHZYVdhqYQ7xRr1Fp1b9dCdXJX"
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
