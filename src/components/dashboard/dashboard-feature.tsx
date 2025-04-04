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
    "3c2c687L27ofo7SsnkuEBga9XsBVcTzJifW2B2VMGYt3W14vKHavJuKLcc5TkXeCuDh6eh8G71N1EVX38iw7hiny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3yc3ST3c6f6m6EARMsmoayUQf1cU5pYzq5ETEYyyD9yP3yF2mZ9EjBwpsobtTi32BkKBkAxRrWhZSNn6N7XE4k",
  "key1": "5AHER2UsR8okncqsoUNCAAJkmkkXsfzjcsAzXBJEuMSEqiShKoawqCVpBMPTNFNjJuCku12iSdjtRusDv9MmurRt",
  "key2": "5ACovJ7CLYsbXfXazFsQ28aEXDCqzbZQ4yTTRA99o2QVLHyDLZmCDepxihk3wFhMMHNBJManzZucrHzL1t9sqynQ",
  "key3": "49F2tckgGLLzfWxnriSA8MsqiXeoTHtjnkwZ33CvWEtQq2AAuR8W4g2HZqmZqVsWwLt9VLMcPJvVuEgaZv7sYnfQ",
  "key4": "2zMcgddFhbx6SgTHFhHQD94eLACxkYzfo8sKE5oq1GiHZ7F1QgMgs3WTMh1X4YuYrGz6wGceHSAN1g53g5ZqQHgo",
  "key5": "33GwQZAeYh6otgNtUXC5iU6n2d7NcWnnGrc1zYzPbpQKd8Jh5JhhHNWeBuW6YKPCxeGG7ryyEAyhvvoYTtA2gdsY",
  "key6": "NQQp3ZHmjE6ozYrQhbzxNaMrPqwVpNAc3W73AbBPQipPDdwKEZfZvKEi6tjeTNaQ2hVv7UMGpRvMfrHrGLdoFFt",
  "key7": "3xJxVQSq6MJ3oAzYTYQJPnAn9EeDYj33FEzrcTFyNWjt39zk5bBdvvHQuAQGTKoMWC1SBRWRHLr95a3Ch9GFdiuT",
  "key8": "YXQfounCn1pKMirN864HevjQVLQzTrmwkdjVrYN66EL4RU6zbbNwS61ZrQ9MkLVKNp2ckebNzKDNWWKqiaK3aM7",
  "key9": "4VR6w86K5uibKnuwADKTKWWmsavuHYCNLX37UzyGAuWscdxSMSm5HgLgLG5fmoXW1DMa66zVRcCE9gNg69oJN2Jh",
  "key10": "3eE2an5yoK1CMPsF98c5LCRNvNhMSP2zrY3yxjn66EEw3pLY7ohkEr5vRjaqye6eR55sUHqTbu3CdNhTJLAegym5",
  "key11": "4qhcECA1uB557pmY7fXKNFy77WYXWBCuE2ueTf2uBMitzKuCGjgPRkUGEbinM91xLRhyfP2tDVfLjWVVGavbbn3j",
  "key12": "5Uequ93zXSouJrbAxYZxkca3KKkVNQ1CrRAAAboB2L5DdAfwpS76n76zShb2811kJnC1thnVkLhTy5WCnfLJQ8VB",
  "key13": "2uVibG5mMpPF6xZ7m9L85ZeP7KLfxz3mhSAjEK4k4zsLJfijHzzKpyygB2XgwPFXmV1Zyziwch3pJ62KtAVpxmeS",
  "key14": "MW97fhu69MgZFYzVjtyTQyiU6jW6jideCHNHxzFaWysaPWZ8UzYAM9TvaAyjS9qLJJqpNDPJ8R2QxbhLa25krga",
  "key15": "2ENBEZtbGgdK24cViCJsh5LSU7iGQcjpKKfNNN7wUwxcpxDciqYA9pfiygJmg33GXPMtmFpwohNGUQLQD2A68jHh",
  "key16": "634ZFuBpYU6vmeVLseHhdF4hAfoUeoQTzvsmers8ueeJBLEe61tn4LJVpBvisaAKSxVa9zjpwv9LgtqSePfHBZ5t",
  "key17": "5CGJTyL6rtdKfJzrGtsFiPoG9QVM96bPoBFNuXGeQ9SrhQTbvkU2EQKJbdgrqnz6usQEbCVcankMpGzBdM7gCD8q",
  "key18": "4RyjeRW7DKqQNVR9ecUpszKuBHMKunszuMwsEbEoNnfV4SqXS3mzZZr9UjNt8TCoNhzZZzt62mWs2cJvHq8qyULy",
  "key19": "2iax2FRBoKs5SYF6vPVSNbTeyvpFAcgkAsQ8sycJXoiMuRGYh5BXJZqnt2vjoGidzTXM3jHDXjhaJsTAX5uxctpJ",
  "key20": "4YjB4hkSA7UNTHXGTNos6oPtUqAw9RyRChcptGbuBfU4VdxKcXE7cY1XT3MPA5wt3jXSTrokCs2sgdHRe8YmiE4f",
  "key21": "2XqbSeH5hyXveeCCxb9sPaR1Fv4urj7eHvyRLrobfP3jriPCnQC7FmJ1Km9eMzSJ9orJCSdSwAs9Bc3dsVgZ9bJu",
  "key22": "33y5dJoHyodotGztRmCyi6mmzczPb2aS7TrDwf5PVDUQtsCatmAEF9xKNWx53uaz3ff43aUvjDvghJvMkrsoMKuE",
  "key23": "4y1JkP7SavZjczxcQDjJzMGVeK22mBaVuvojUHaHnmDv4ZdpjSScWrYzBhhDWrhFKn3adHPBsGiyF2rxZyCSJzD3",
  "key24": "4kaY1LxFjkAELPBDTy4bKSfC7oGaBsdcz6rnpV5SNw3B6Cv5MGDKToXaG81Zkv5b29Mo8dcZBgKKSDbmx9ggtrRE",
  "key25": "2oH6Qvnd39PKrpm9UxMnb5Nnm1Bkt7nYKHMgAxGnLUEUWxghgDhFXetxuUcoNKvWEiHwyCmJp2XqZKdpYQ4RbGYW",
  "key26": "yd4MkK2oEy4QKqD8iKWF8DA5azbaztB7BnUUuNugiSkLi9JYHH1LNo6CnxbMXpuHYvQnghwtdxkGmLC8SsuyDcS",
  "key27": "7naHRfTn5QgsZ3P75mCwycbFoAWudFFCqn7kaYoe2RZXmE1tXX31HZbmByH8YztBHWWv218bfGN9sSumbFWXYJG",
  "key28": "4duCFZMhGBGySeg5AMLLASwewYuP3jvNSb1kvQmrmpNFY4vekhPRU8Fd1deia286D3qS2oaXZTBxThe46wLZHDh4",
  "key29": "2epKvesmzJXJC6A5ateNFYiZgi6FcASaufdMGFbqSGyJnvdGGjBQzG4hqmwjTmoNjK1LeuqmyM79HsRAduCiF6np",
  "key30": "pkFiyiJHaLYeAEZqv1A6ceXepcZNeGVVCkYjqL376u6JBophnYQ6B35GJCpYzmfiaahkaMd3YZgL8TEHjiNRSD5",
  "key31": "4kJJdggaqRVHMYNJfcm7f1yoX4u3TV8bQhnGHaVGA8se9jDXcef3sRrGU4yW1WRBnFeVhoV5okwJfcRk28zrCjFS",
  "key32": "S6uq3N1AGrKVpnT326Tw8ebt9PFwAbNeWUfth5cXED4ztLAHAdzLs6VdFsEafRRaUNJsyAmdEj8QTYtHTQxYod5",
  "key33": "28AqGBVSeXAy4ApeHjaN2Tnvg4SDHitmezm2idHpdEVSo1kdvWFeLqQ1GGJZFE4EfgZzf1sDbq7xARq9YbdheiMt",
  "key34": "5SdRNnYqmkGBqoBJDGrcfyViuWE8NLn87b1ZdEszHzg7tds2WsT82iKLrn5GwPS3t1E1zKVUu2ZmNro2UG2oka1q",
  "key35": "UuURZQ5DvzceUAVkcBLcidE2NpvceG92WkAjCyVQGKqtZAJCTDZ1J1nThj63ERTL92ZKMoYv64DQEWncnEA1otL",
  "key36": "3aNKvWy1Zi9ymakgFKUcKQLAHK8f1fPLqT2mUNKpp5xezuikFtrjeaCuVV5aJfNMmnE8HCHXEhkSKGU4RS4Ths5p",
  "key37": "44Fi2CDZ22qwRANy4yQEdcZS5ypbUGNg642gptTuU6kaeWNKuuFMxz3Dcnyrf9HHtB8H1aJ1SU2w8zrwEor38zif",
  "key38": "33VzKpstQnzSqD5JaxGKDk1r1jAgSc3ioSyQ1LDgj6y6Sn65VEe4bcfYjJfUx6KzH47JxGKmsTWF2XD1MWwrT55z"
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
