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
    "otwdWvwBCMdf6wZH28kFWfFACZJsuwzj1rUNion4ZeqWJ39nqXHtPYzkmUNa1YtKMwvgSbydwgNzM4wQU5WT95h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNfuYfp9HmcYkjbYjQoT1jJfYqx2GzaiFHe1R3xgDDhTLgzyg5pG5DhiKpNscJBG3DnLah2w88rqCLUDtq6Pnb3",
  "key1": "yrY9HGn7qFCTH1BLcD4nzM5ZuTWboehNod5uTgoUoxJDM4k58rTdvEg1AX9AyXhjWMxu6Vug5TdrQPqaeQbPiL1",
  "key2": "5XhiiXeDqH1j1jzb3P6vXsfTKAk5B93DvPEp78td4UG2Bb3w9w9oFhtRT5n9rts9H53gKjrhpz6saQExoqSQeGcz",
  "key3": "3Q2hs8CbzEjMgCLMvyhcNsiFG2R4ABUGpAbsfwzX6FbZPJ3exrEAVdVwRrBeir3EArnSSxqFCw8wsSaAQkEVZdSK",
  "key4": "3yyo2Vs4XaLSXtSXKkemkQotV2yR1wdqzniwYHeFf2vv3phgz7Z1NVfgc7zoKq7LpSqb1b8zXjYkvuaM2rrefmdc",
  "key5": "5ctfqSFJ1R1XLdcxT7NJLryD7fZDHjqfRJxmkMqXQ3FvtvTG7BffWKbqe98snMvRXP6orB5zdsSR57em3by7pSvR",
  "key6": "35CkK8vsDe5HWNnTiHUMXVY8uzmxRFtdumn9R5u1rR7Y8xjaJZSLeRXa2kFiSZvxYzWFzb4hVie98JF7ZCmxYuhC",
  "key7": "441SGLCZH7uJzdntnf8FJ2XHU8DW1BaEmmNcvmMEaLiPpohxLnFhi1XzLKHLYBRB1rJjhyC7SH4ZXomu8X4xkpKv",
  "key8": "2EZy1hQRJEMzcEhqb3JPt1148FDgqdKP2r342ZDctqHRzV1RJoLnc82GCcfL92pB6ZTf9bih8KXLTdBxNvK64Jwq",
  "key9": "jv3KyxRciKfyCBdufCpCcYjKrqfM9Bf9NSVYZfc5jB6oaw7YvJHNo4ppyZ6jFzN5voxHGEn2iYt8NVACt6JNxVQ",
  "key10": "52op9y5HwMjmeCoWZkLygkGYk2V22WkZFnqm5m6eLJDsnZjRciDqUt2nidGPfWbwUv1SMtLKKL8ARubW7w9VCqyK",
  "key11": "66ZCNTyjetP95VxVUtApfixVygYfCe7D2dWSb89E3wRtvEko3o8YjhmJqTPXhdJvpsiPHqJkZBGkuXhG9SVesWhf",
  "key12": "3D8qzaDwuCz7S8dHtrJq67PG95xT3vvGiQayNS6rcFNHWYxJto3PFncPDeebNxDDoJgxarKqRwCYjBVEUxjhsxUZ",
  "key13": "tuBFA2RHcJPL3kWe9q3ErDm4YeqwFLrySuWrbmAnSehBwqtmRfgoZmuKGdbz76eEGUQeuq31ruBePgKYrzUujbZ",
  "key14": "2LcME1HgQ7svhgyPMohM4oE45Tv9XE77HWPpMu2Wn6BAGwqDFDd7BzfvyHLuuAtvy9TAePygQCxD8WUUDyFNrW9e",
  "key15": "5rwy5QQ5d7DuoeRhngRyE73hyfikZaELBzXWT5XoM3dy49WFp5JYEV7axFQf7PVKvP7HUmhjsPN5EPEoMhexcNmf",
  "key16": "18tJQbK8tzuMqAT6KHgFK4rs9SE1K4YrxrYpYLSzp2v1ZmpgpMAN2hKV1gBXkjGqmFKPF4Uj9ATpgejVXNte4uu",
  "key17": "4gZDqAKvBoDQ1kgziEYe92UhPKoLfckCPKutzmcavoZEMVpXKMq6Zz7QfaH7NFUuRcdiNSo8dfmoJbhGfSpfLbTY",
  "key18": "YyeEK5VrEffJEdC1QmxKgDkM9HLVbaQDEKmJ82hFRDxsmhZbzaQSmiWZP3zCNBVEmDXzSLRygtZB6hdE4y4GWTP",
  "key19": "5pMCuNpqbTDPUYkZQQW323vesMevt77HMH5MuCT8sAtpjgEQsQPDB29pg5astvdasBycvkUZUpjYrmdL9V6DZ3pP",
  "key20": "3KAVVxdyJ3s7wDm23DNnZJW69DaAP2rNGbFeuAn3m37jiCB8vEHajdero9565hz2Bk2TnBUHDzweM1HJd2tfyLdb",
  "key21": "5jSFVnK7BDUFs8i9nCWd2u8GbaBSgnM5YLBeQdDEYJCs4NbrenstHzCKHNZRh1zxALHXkDXZJVqrVn3sczCcuK2X",
  "key22": "TeyXtR6ZfwhieNUFY3sW6vmJGLhxtQnPNqf6d65mVqTbUD5sfaieH6RuUCGi3WAYVgy8JUd6h5b1nV6Bmggt3V3",
  "key23": "6RChUPTMVg4atGUVCWfzpj7LWATSWT3YnyweL5unvNk2VJbK3scXWqEF3chRMPTqL5QG76FKb8DRKPoQKHpwG8q",
  "key24": "RxohKdymtH51pbuzt7xk4QGxMzGPTgpBZmK9SjLQ6ommF8y6M9Cwnt7aN8nfFUVuFLGoPjvSkMAYbUqHyi5zX9i",
  "key25": "SPkM5de2GSBtGQWTmk1Td9wFC2EyurRjbc11Yd8HpFfWxcpdz37kLn6a8Tf2xKNnG2TYzh1LhCMFyPMsukvQFfu",
  "key26": "354UX2STkU2npcW5aagPVgmDKJrtjQWjFHaoryp5XbAg2TdDnWZuA1fJ1LpLv9vbk1rn9VLcQd4XgfYyPdCG4pQX",
  "key27": "57Na2sJpzhMBBJ6YQUTiYJU6zbfLi8e7wfrRbAYxDUm8pncZ5CT9jui4e7136pqAFvbXBn73xojXPzujpZzsNEoE",
  "key28": "3TpVNLiiSPbPjX4QvqoEqq8izYUZeTDLCkMqw93jALEhCpAkzSDjCEm6wu7WdqvnKze26uQgRxhBbAfS5DhiSGDU",
  "key29": "4N3pFvGuDWUDRz8YMFh5ZejszjSHwPJuef7iDk1wrhMeUCa7p8ygEC3VNR2hVHrcSDUjRdAiR8ZyoWgoFGxU1hZU",
  "key30": "NUvXUkyojF7tsFbZeykmi6mkU5mePjPrWsPLZBuVcqxMdHTHLzKR38D3RGAKphNtqVFAzGAwtfZCzatQdaVqnUV",
  "key31": "55UmT6BdQgCAwuo9SnBTPM9qRoi65L1Hky5TkmfnxwopTJYmZPaatjtQdQUzHafR5NHb2sL3NiyGs824p9xeAzJD",
  "key32": "122CVHbRUhACEGe9F5bqMEe3MRKu7kLiY8ymnerDBLVyWfcnNzCmnwvWRrhhFL8sCqtEQBKhAyfjnAW9DUms3mM6",
  "key33": "3834kD7Xdo9NtbtNiJ5B3NGNRkcR9ofG2u9K63LXSJCiWuQEFUwTcAmJR37S3WxkTehghW5h7pqe9Bu2xutkBSww",
  "key34": "5M8UYQhuSciyhe97u3jhkwUwXvRQSZQQmY24VTkAp2EoeMJE6zqbM9bf5NjYBdk9r2cXAiwiQHWKDUYN2xGmhbiN",
  "key35": "2xWCG4jreDkL8PVyt85ioQvMMCu6AhUsSBjVFLZxBqjtpWz4vVpNCJGqVZXami56qwqUL3C3rqdhWHHYyvRo2spe",
  "key36": "27zS7zHivh49zRF7MCyacBWcFXf35RWEdb6MatpjmRjiCqvZCmWyeuNSy2EaSiwpGARigSEZD7rK9tZxYAyu1e3k",
  "key37": "24CSch8MBsh5DFwtFeqoXSDz942G3oar8yjj5EtvHupjAAsfHFx4tTYYa2npzGSR12VFwBTYozKNV7bjGhmMhPyY",
  "key38": "3WP4M6mjiXoTNEYnSZWyGE9KkJu4MCTYmf3vZYYMsvdQuXmA6vYTnMYBLF5SS1FDBnkLX6bQfHFYAfqDGs1n3Buq",
  "key39": "2SwBvk9r5A8QuvTmYB3VdVfRwM4ed2XHNxkpNBrDxJSaoaMybhvsCaTEzk76prfYG5sGLF3Qff6wk7et3acykd2L",
  "key40": "4GSnyCQGkkiMEac6hAyUp6hP8mttbvnQhamwzVymVvNQkUDBse3MKj44DwMn1VCUuJNuijeYUb4VHaZjvPtVUmbR",
  "key41": "49Yx3vohWP9aVqiuULvSgmFguBF87aT78F5Ft19xu2RYm4LgFrqfhMP8fNFAJgqE6fk9TkXLg5JPEoZjPiHhmBLx",
  "key42": "4VsC6QsVm2ox7MHH4afRdHTWGJeu9hB58jHxebNdPX1pLHDDSZD89sq36DyWaYqn6FWzNgGhLYRk1yvHzQEnJf9E"
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
