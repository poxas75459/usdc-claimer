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
    "4FsNzGzkigbZipWkdj6XqcBFvHg5CQ7PmX8QoNQ7W5Q6eNqXN2Ddjbb5ZAz4kZcyC6cheQt9Pi59RxNo7bCZEB9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsVRq4FtycDKyXMog1u5vcXyHJBw7PnkUT26DXpJ1Ux4RbTx1wogydf46n8X8GoWSj24oodTfyeLHngiNr7m7c6",
  "key1": "3QAABi1FauyzsZzvWh9aYiWAsq9zn7td9qc9URLmhhY1Q7L5xCBAw1vXmPyGhCk1hBSUHPaB91VjAjTXrFhyKDjx",
  "key2": "5V4v1Wtgv9BARjiL9KKU3GSGqGKj9eY8gZgqTjFbmJQLUtRQivabPxDwzdmn2XWc3pwxViJu6tdrnZQp8tfqSXuw",
  "key3": "785MJqxMYqBJRdEZi3dCDxaXeXwzqcEBDbgFDAA2CrLj8wVCk88BjBfrMHkmfWDXMPw4BN47W8zmmqQDy9jEGqM",
  "key4": "5VexW3YypFsnhvVpFBQ9nPxKN34ECHW61HHG6QGCu3RhZV4vVqL3Dh1u5af8WU5aTNZHs8GNDRtuio6UKosoR83V",
  "key5": "5iEnuRVMKT2dNQCNdp3Uu313P4KAmcuZsW5d8otMph8wzPYfSeC8sqnwj1s823K5cT5HpVukw2wyKhmnw5Mhb8MS",
  "key6": "4EqqA39vAwNM9ZXVuwALDekmSWwVnkq21uU5L56uU3gCpcYezdTrTziPrreEpLGjRdCT9iQdWDVCPeWT9JiioECD",
  "key7": "2soWEK7NuLksdDaeqrBsaKRc2xyrjuLrZZPABg7f9yodkRPzoqQqk9J6YrsRVRFgsjmuEth83JbDcKDNHV3pBuWu",
  "key8": "4kdyp4A8e1QiZQChw95YzTHWLPPNpNPEYHE1CF38dowgxMaY6qispvsMgonszbcKyFKLQC3mJ5TSguKDtyp1mwus",
  "key9": "XJBiStgmpJ4sJhLZtF1hyan2UP5bTBN2jXtoGjiWg6xQiceL6rHxEJPW7n91vv55ATRCuW2Ax5wPe3J5qMyBv6t",
  "key10": "6582UKVzPon6XdVHyLBXPKoghm19ssVknEZrjdYV5kSK9D7QdxxoHqFdehendLKPQaHhttY1cLoqJdnyFaNExNRP",
  "key11": "53mr8AYhS7JvnYd4y6X2Kr9rzrSJfEgWw1owskTH1GSy4RbacvymdGJxoEKSgpvVoS5gu3y4BjCQCKE8rHCncQbu",
  "key12": "2hwsXBcPYbJzBMnKk4HBWsdHSP5QqESiBJYfqCcRXuma61t6zUzdcFem9h2nUKg6ogPou74hzP7i3fezj3VMCJ3c",
  "key13": "4RundQeASFWinPzCe8ZMttAihwLKCLzzYtavvQvKmSzC84U5a7Wd44T6fgjxrBTPmua37MXcjyhBKAtMMFLuVJQN",
  "key14": "2ALs2FME1d8u319Feax5rxCuBkxYxR3RVVsKPLPBmgbPsg3VNR7HbXZxwKArgTdQQWAvTsCQkxS2JRgmv3GbDfxC",
  "key15": "3sNJf8jD8ZPq4P469GeW63qZERpuPsmf9YWSDvpLtyfXZAjfySULz85RJJwmqurhmJH4HmThzD36y3o8JxomJR1Z",
  "key16": "4XwTMc5yqRBBWgkr5jgXtm2bX33EoeWPHirDSM1xRicgJhBYGdVwTrE2eeooXwoyoBdEg5Q4rceBRpiddCuJLq4r",
  "key17": "4QfKxVXHRVR7XF6kKyjSAVubdY4mjy2UbhAQCuHJUHhNDdrBcXAGVvWgnoW75NtcN3Jd9vWambDZsXGcqT29gphp",
  "key18": "3DhF9RgCx65bEUHE9UncTccJHVJiSqABxBoHFmXJxdkLGABPK6XkoFtWiuqNvLKAfw2m7FszwC7WpJL3MXKht7LQ",
  "key19": "3RsN8aJgirwxXpPpeZKuWNwgGC6yEVkcFuLBsvGiAeh4zWhZrhHs58yZub1yafZF3REQ7zAsR2ZTM5dpQyHhu5UM",
  "key20": "2dCX9puDkQHnxKFoGcrfDVzneWDiJU71YAkwXZkWEX7vYYa9d2xY7ytQLJCGFmcQkvjDwYkou3tqjjVwtuQ44qUG",
  "key21": "4ptrwZR5oiM3z2zXZUbDqmnjRoVNhoaZzXj4XjXUpiEyMi8RYfta1jMtma6NyH4t93euYo1vg6jHQY59AszNcH7b",
  "key22": "4TNarS9oYCskNSBeFGZiXu9sK1Nz5kyZmwMr6cT7k95sfaSjrridUTGZEHapy2qYFtiF5MTBx7hFDUsf5bZnL5Ak",
  "key23": "47XXgEyQ5Jfk1sQHb1NHsbipVnw9X8JH6RNhBX3QEGoLYx9fHPzJPg84shgqesc9JFNFYES2St3jJvNU4FXaK2Tg",
  "key24": "5Rpfu5g7RHDjQusha4iBvHZneWy2zrGEPgVnnA9XeQbsn21Ze8fAiTgcS7y1v2GhbXqokR6P8oCXGyHj69ppwZ2e",
  "key25": "4ci9emEH6ZVYcAMjuhjB8MA7p9xr482BUq4eJvY4RuuswMu65ukj7PsGgV1BRWd7ZqdNuVzu9cAyPgsqJ8LEf4cC",
  "key26": "2UEC4CkmaHGs95fQpLX1MDrRsG7DdziRBsmJEY4W72zXXJ3PqMnqU3CMQK6Uke7zQSpG13njjB28ayHLQiTNBEep",
  "key27": "5Wa1beRKbTjxobwou7gTKGmstgomSMrBELPVFNS1a8TvE2hpWtaKHZZ2ktnPNaDo66dCkCoStB5QtgMhCrgQf2Lx",
  "key28": "5ir4mc6AW7GfuJajy4QecTNcsZmmU2Q5dy8Fy1LjYmS2bxN47MsFRZ74RNcYiLi1PF7tbcEDxzxtEtveUKHj1jk9",
  "key29": "3ULMpaWY3tiqHXi8H2UX1kXjcSPsmFMRAs23ykJU2cVHf7CyvTg9dvXsrgN4AtH1tzHDJty3NUwXdvB2u7VEPo2n",
  "key30": "2JhMviAdyVvshoSPU4F21efvw55QH6f6YKhMtys6KQFjVJkwBJfbAgqyJpiMqMH2R93vh7UNi4vdYGymcDKGQY9s",
  "key31": "356Gikw3kuf7wEna1MTx9GRKx8wZCEhcSntqHPKU3KDmJvZj2RQA9csaPoQBHFyZtAFCV2zbjKZp1Sbjhy16PQ9x",
  "key32": "5SCk7XXCTrHXpLhKnuciNhXvwFTpt4nPiiG8Jqhfh1DXkroUiBZc7tpJTVJjG2oot15Z2eodFQrvFx1CLhGGLeTe"
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
