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
    "513yVDQ1Wi6apzpk4Hsj1FUmTYpSAZ6DfuMZyrxb7wiTFopuEmt6HmCuzMsCjEp3Q7YrhsWz5BdLpM1CTjwLqVwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bocwPKSeUgWQG8Hwp77snHXEbiFU5qzRzcwF1GGjnH4JBS6zr57EtgVFWMC2kMLzrnSiEE6cXUuN8edWgbp436e",
  "key1": "4uJxvHjDT9amuajPMtqfejTojmKoGHwAGEGqcou9FHKxMPRGqgFdmJGuwz66fDu9PN3XRhpHkxutYVQASoPfdgYs",
  "key2": "Ukobk9ovr7ak2brejY15o4w7svQfofdAb4UBU3rgrxX2E7pwpSSBMLgfym4ASUsGgQCm3E9rbDHzcP4HkDTq8BH",
  "key3": "DB7RCQybDQBMbhYkPKch4BMNanKfchyfj9MFbswVTW7wrP1tTScayamg7LvnjSXW2Lc3s3UvnwJfM4GZALfKw7s",
  "key4": "2ettU6n9S7o4WrgdWuPvNgZ7DtTfGiCWDnWb88jrqbUoA7r5jeissps89pAwBUEBBdj1B6af1jy7KdhumAeqtCMf",
  "key5": "5GJDvEeYBHHwdeuutEVDLusWBBNtcVX6F7YM3ykL2PU9KTD1dPJ4m4PjmJ34Q2CXZRKV4yCxfdCUZ7mqzdCQJ5kr",
  "key6": "5jrLrU7UxbqwjRpSPi6TxsiGyraVPhvMuHKuf3Ah8r5w6sDQf2CeZjybvGqGKad6Zb8Loe6rmYiLfWmSLieNKohj",
  "key7": "2LcPBx7rVmxu2Ak1iT5n64H9p6LJ7TkZ87aTJVjKnx57LyhoeFa2dCTkWrbBH9o25ncvvKozEHhCsjp4sJWZZysd",
  "key8": "3gcPY96N1YHgjz49g86ctWD6qYaTh8duf9w3R57VRq268WQpHdwP4EEMdmUrQYTTrMHoX6ofEX6UjG7ZBs93enNu",
  "key9": "4eQHBd1dXDDNyRQT1tzgVifYa3RAaCenrKh41kvbovt4cSov6hAgtJb6SeEt1MRs8iwp8TshrRGu4JzvR9qw78BF",
  "key10": "2QJJDyUcyXsUmaAARNPDvmCj9GLCxjz4k2HQbZEsXNnjYaYDkQpFaPxLJteWg3C1kkBikco7b93MtHGt1Trz82r3",
  "key11": "5j4vFFLGp5NL8TjVogYJCXGUjHzXVJppdfD4JvHEeLhiR4Q5gWY2Gg9hKBCyiBPKQH6EY476CcNLyKSise6E3NW4",
  "key12": "2fthG1cWtDRRMguBruELRLptMeuEXFGSrnxMmsgeDdUot5YADAK9eYmQjoGV1WgzFkPyTGFAdVf9dPSZ3vpTRnWh",
  "key13": "2YWShjuxah6cDj1xhBBicrEcjdGPRWW4nTaTtkJyZJCuRYiM1yVfhxeofQFKpcZFHaDfJgxLp6AD35c8RboWGzDv",
  "key14": "24ybWwg3Nrors93maYw8P6X3qFt17AY2Xuiuqs7XkACwU5UGE2wgGbhqYDugdArGGpvB3SUameRYt6vpe6cwEPV8",
  "key15": "RQvUvGAUeLQ8UkG2Nn2ZyJfvxx6Uf8a6wTXGXD8LY5L3rdQWgimjg6xQgUEKcUP1LH65cER5ChdhqA2Y2P2W3Vw",
  "key16": "twuN5tc3rvtn8aLreeLm1KqmYWzWxEMYca6MSgDhigkbyG5uRX6KReACXFKQsbc7wM2q97U8UtxT8eLXaVeoGzW",
  "key17": "jYtCTmxGpDTwrzvr7X1qvQ2PcLJhgy7Zq917rHAoMZnjqK8qjX9xe4VAGVRL81LmStMHNKiyENMe418LXN8MoJg",
  "key18": "2YttkcJTmvYZJQ1MReqgzbap3QMNjqFVMXMVLsJN9Y2YNWkNUAGmiijSbYttCnQX4U5PvHWaHJ9AdXjaFkLv8fwr",
  "key19": "m5uZDdWajy1MMEiqptuQWCEurcNTApRRynhUahPJqBMS6HeJkx25snZ6UhbBHUqb8MLTaB7Rz1fKxzHRSruhhGW",
  "key20": "Y5oA91iaBVNbv8MdcEExncTpCo3L4nUvniCLrevnAnSAyEhuYZRGvP3xNSrWBSwdTzZ2WGwQQb8KJmZSsRVxtco",
  "key21": "9dEmRV82MW2hVcHxAAynWg7xXPYHGYBFaW32yq7Pet3FRQ9HGhBoNDbzZedwYxPhqhDGydvJhmhhSaDSegLpKdD",
  "key22": "4wieD2EgyCK4cbLMriuNzbvG7Yh1fyN9xamgDYWMKgxdUiJM5tTa1BZe3FYYfnJWQqpPQU7CDmpK5tQmbwby3vZ1",
  "key23": "43nodmfadW1WLQt2cZoyz67PUs64pnTt595oQUP7DjoZXSnFiai5U9DbmK8Won8EhF7CgxCu3Eo8aQAb287yRs3L",
  "key24": "2Lxx4fBvrjYxUDt2ac4dNvbzCYaZjwjKKeibnSv7F5ftzX2EG9Un4kbcLGNfE7iKh3upxDYEhof4bruExQEkDGoh",
  "key25": "4Zy9XxFsGWQ6vGc1BsKjPZXfVkKsU9PgMGmd6H1cDHSghkfEa6qocEgbjzvVwUsmpxcgXHvjYFuApYio7rbQsq7z",
  "key26": "4CYjpKZfoLRARdH6j5RNzcDYKhpCu4Nyf5NgE2oejUuzTyy5K4qfH3raVvp3cahJRUgVCVshNGdk45rCpNHjfY8K",
  "key27": "2hqcqi92pHxhowaejxFeYjLukryxZxn2d2waRHKSgnVAkYmLuAMT7mtMpATXjgASm5WdsbRv4bemWNYfD8mkzY2b",
  "key28": "dFSDUmPpb7aWdaavDRWx4BVgEsqoJ4fk28sg9UM3ME3dGoFsmUZzMhSfEX3aj1mJNBjVnBrxqNqkoUwRWeWzaFy",
  "key29": "2GzJ4B8eRBLFLmLVeHHsMHjQNsWN8EhS5yUef42rpC5jSy7c3yk4ver3UTc14WM5g8uzodNKMztkH2QTxProPEVv",
  "key30": "4xhARuoJoWQ2t8sJ1xC5kTT7hHPTpXCBjmraVLByrBtihMGoMjuds7xFUStD6SQuYC5ujbhRSsbXsscZNGCAB8Px",
  "key31": "23616PP7KpK9TA5YDc5XpMAef4D6uk8uuATtQN2VHp38N5t6SmjoeaeyHkNi8fbEZBLfJsjg3fSmguuvBDwVnsV4",
  "key32": "64rVAPte4KeCRQmvfBmW7NKRXrMgcFwc4uSWmb6Xo569MyCxusjzYDLo5GsAgFyC9JqEn2qgzv9hhqbQqpmefFAD",
  "key33": "3u6LBMkP7uLDmrnf6rsnUufRcm2c4EeAmyneEMpGCRBnreTwzsFjVesXvKFyq4Hcg7K4kPSTc8ohVBE3yuzpRrfu",
  "key34": "3sNiaV4y4DDnHCiwWE7niWcc7G7ynhQgo8CUgjVCe6p2xFBWcce3Rkpg9e9EeB934hsgGJT84WyyMYi2GGqZbpdL",
  "key35": "2cNozGau7YuoWPwcTzdPmHLinM2mrmbWjKGn6SmpVcaTUbrT3MsKJgnc1j4EJBXbbJDvTKVcqbPLSxsHpdnpoDjx",
  "key36": "4BwfnAXpxLus8Maxv8WnYZHJJ9Ee55ftXVQZJoEtzAncz49KDZetcxgYCEWWPKdyncqu3vkH9e2x9RYbzjeiYkaN"
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
