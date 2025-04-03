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
    "3GmXBnxDZDe98xSoLonmkvs3AiCa7Nsk7VSWgfYHptD1hfvfV29r69CdppWi5Hg9NS6Qz2LqDtZv4v3RMfKuY6u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezxHFdrMP8VdnwbrtRKJ5Q1AJrneMLQtniJrGN5a544FVFriHuyfc2qi3R5pt5PMkNaoXzSatUurzraaguLEh3D",
  "key1": "3VRnVB8Dk9wtxFo7HdmxLfXLNNMK5PEwkNKRmVHMEzrJNKf6Y6ovZmvKK9GLzoyBa2WgqjnG7ofrJd1PT9gmmY9o",
  "key2": "3mRxm8tV27wS5Lkv7oN83Qt8jD63CeirT6tRoALoL9knikP3YCqZyL3DQX4iskC6VKTY6RsywSBbMG9Sq9mFykGm",
  "key3": "3CYt3d26ehmtVQvKdd2jXWYQ7Bz8TBYZ5ApiX1h5EDok84q89rfcTQ8YNA6FZqqpqfNGugnShUUoVsjxmEhSR791",
  "key4": "4jpjRHk6fv4vJxkgeJmRs1QLhQ8nXxo8HYvVAYUBqcSBa3VYmCKDb2qx3dPb6z3dkeCQvd6RQDt6EPBLMDNEm39k",
  "key5": "4jHWmRuebhogfNVkf95KTjXEvzQXPuXW61QDXv47fQhA99MdtQBnaXL72xrtTFSuf7oe6JUMDA7SUX9q3yUuQLq4",
  "key6": "2LED272pLYyUDk5J5wyP1MYfGCVSVpUSjsANQDxYWojrLpH6CFkUktZ7416corZqmsA38b9KJARd423XwLapQPBx",
  "key7": "3QiR1UVPGhn74nHjdVXg9kD5JcV1p5X5MqexEzZqgmgSAyvk8vHHcBvnNkphCE81MB8Y59hGkKp78XNgQin7hYfG",
  "key8": "47t3TUMzkuV7b2fc5PTyBc1kAVB7yuPDQ7eXi5LRVm5PCCWwXYcTBhDXiyvEgpAqumioUnwKyG7JA8cmJSBGNNNz",
  "key9": "2enEknNAiiAVSNjBasDCeMmCaLhQaa9uvXA65qphVTNUwxHeucrLAS4HuMCDn1NYJaxSiz2b7PGQVB8pfx252jc9",
  "key10": "2uKAC4ES1HDAeM1YzB4QBSHqePNdLCv49DuzCvmhzSXSe6sft4ym1B9va7cdu29YnRJT5chr5UY5wZGAbErhRahM",
  "key11": "3P8wB1zzZwvcpBZidMcegRnbRXrXAzqtgeU97dNXR45Y87tfApYTPkX9SWkZwnmjCsBZcbWoEBRe7GZn11iCivEK",
  "key12": "4CdmJpf3TCzFhQSdzmJLNJybn9yfSg5UCZRNy8JYFGrnVzbjQ3Enh6NusLhHTDyCSq3M58zzYF5wgJbMhBCnFU5x",
  "key13": "g7YbAyyRYsFwMwvyriPe7eFLbZDTmx6iXKoRmb1rjzbn51SLckTGu4nBCzMFvsf6exbETTSAoG8ffx3JZd2sQxr",
  "key14": "3wLRvRZPa7YBZbi3z3M2HAniSwnzBcz4z5jmY1DaFoNM3E5jyTHvaecdJwEr9HKU2B3ut6jMn8emK2e86T6hrAJN",
  "key15": "33dd25vNGSm7xpMyhAzKQvKJqScbnRXEUztUxgLf4fECLG1YF45qBpp6VF3MsVmzymGxhyrXuhhMmJ2j2LKkibhH",
  "key16": "28bShKqBKAboiHEGDp8vdCQBXu5KVLgo2kmMUUs1xVue2hqeX1i65txMVM91fUSfJkeuMqDerfeLEBkbPJU7MGKa",
  "key17": "4wMqm4mNYigD1fD7r9MCbWc521VUtuY4WXtPrsz164HMAfb9aNX93DWyij76YM1ToLFVaWaPhunjax8pWNhr1CRm",
  "key18": "2WrRRZwLUanURB8B7x5wuMV3sXZxX3avGLK9GixJLBuTnZgrJQwFakXDyotmK3oF48cktXqLJjgaPdrn5Nx8vEiK",
  "key19": "4MbnoLe9Cey4F3wM8bm1XoUJvgayAQt4DXrPYaiUvDVriytLeQKFT2rmB6zJxNpZqf154SveudnFe2fWCmUBFrUi",
  "key20": "3mgovAjZb5S9Fm3SPDzKyxUgVboXM5T2AZWcVhk7dkz7stDngxco1xucpMNSN5DMRGFymA9TkjAoLudX54NZDatQ",
  "key21": "5T6w8XHKpKWthM9QQ7yX4fSrdHdjzvbvjqY1HnHYXYBQxd38KXukAkpai1pZzW4MAMrCw4Ys4mc2AMe3tKTzmF7r",
  "key22": "JPShzKihQB7HUrN9TveUpntfXdKSkEbesKvtnk6n5MY3g5qc6Wo8FgHiQf46sRvMXKNSAv3giLYMC7ff2NFUoK8",
  "key23": "53mNkUJNPj1bWHxvHqXjPiUtQqhhHcAT7qvnZDj5kLNGnDea1vxYkqAAnVQYmC5pNo6mtRjCJZFG4MLFQyDKhmz4",
  "key24": "3RX6gusb5GB46Jcixw6BBeBAsEg2s8RaQR5uLgFvsF4X5Mh3dzn5BLVKACBVs2VujYNF9tbK5PWPmyebRKPVte2y",
  "key25": "2zgoSQemkGvZEZnNhG6xvbRkuhaQb7VWWrf5xDczhCRobc99jWAbBQqCotwUGMeDvUwju7sy4nVtBUdVm4DLKjyH",
  "key26": "4ouKHxd3Sc2iqBkrioKQEkgsr1imqWt1n1oNGMcQNNBszxaFmuEqPcexfoeDYwsKvmQaC6mCyxN2zSNjE1whVkdv",
  "key27": "23x8o4dJF26iFFiqDeotWQ5A6VYAP3MpbdzBkGjLQTgxheGUv1CGhmDuiW49RoDnpa5J9nebszFtX16nfd91Akn1",
  "key28": "22Wk7B8T6DcPAFbP9xLDysrvwgsLiPdX5cuE753oKPNahQx4ddLJgdsQiLYW2izWxPgNZZy8KKp4xkrhdUPc8ho7",
  "key29": "2jXEBHXHjbvi6UtDEQhU7WqYwd9v7TaANsJj7UGZUxXzD9nits54XpLLGaG8323FHo61HUvR9CtgTe919YUzRgQo",
  "key30": "2HsMts15951mozK6tm7f7AkCfA6NwqWf2HkTTHUWNFjZqwkWe9opVmBZ4HiLaxW6edjr3W3thjRtgVYVjksekWcw",
  "key31": "67chbdj6fHCpwDdUP3Gwu2Xjqonhp2jrxxw2kAjmgBVe7WhpgKYC6NbZ9sq2zw2jewuUUZkRpNkvtSXUpKzkdFgA",
  "key32": "4qGLEEqkyoLjqav7NTnjGAXeCmk3jHPPSRMPBavHsRWdafAeoJdL5dqVvdo5VaJHke6JTScHceqLhVrDLd8hDMJZ",
  "key33": "zTAnZZQxLMnVy9y3wVaRoVMYswbn1gna3DujGGJXLB9PoS3VdYhXVrJQjenwPMxhpWQ7VNvknHqQsSJonfmoUek",
  "key34": "63Rg8Y2be3NMgsdL4d3Sqt1uYVGTsbFyqBeu2BbUJQJMwu1QBvGfDNyR2wNb5L5QxsPMhGg2iPgFJsH56RooVfnk",
  "key35": "2q4gE88HbSvTJtsBm7MZmwZXJcAwEtYaXHuKwMPEMfUbQ5sBfuqbRLt6hQp3f4zXCKU3QgecGkFFzsUeUyE5cVA8",
  "key36": "4CYiMt4nvUVu53NNGE8qX1GsGcN44XeyS1dCbs2C5snSE2sKBSyrhEuVh5o2S5r3ZL97yCJc3b8o5BVurDTagoSQ",
  "key37": "qiQ7STvLbvfd4R7B6mvAzXd2fuWdmDGRzbfxpttbBVquoRvwe7Ub5iDkieBkErFFhnyVefUSGaZjzFXhNvRs66y",
  "key38": "4dq99fqQ4o2PK5XDrh6LAs9FPrYUxZZmxzKZtCRQ81oTZ7qwD4mPNTKBZJEJVC2mFYLTw45YJUNik1kWubvCdzsr",
  "key39": "3wDtMuJgBDVn7fUexCRDVyrCRjmYW1Fp13dUhh3S4WZiSBpBraZ2xJUc9kScTW378bFPKFMWxYnMicfoLhYMf8gL",
  "key40": "68EzFtxprCXnhHfRvBcZUB2wkWmUTtP2ezuwFVyek57Cp76dTHcqtjGpPH4K1Drj5DXC8wTWvwHHQ8xAVCnE1Sq",
  "key41": "4JKfSy8PcoaQHV3VyviZL3sQ8iYoR6jLygb6QQ7f9N8Raok7AngRnCMPz4vDTDsUcYX5T2Dzb9R5ZW62ToQDCgSt"
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
