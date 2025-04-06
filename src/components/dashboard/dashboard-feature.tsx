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
    "3AA1UoW9hpvnocDL4uwWo4DV9kZrhK7JgDuCitT8iCqjQNpzod27yfuitNAkqhVmSfpcVj39puLAtkHYD6rgoCfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDj832xK3ntTJB2WLjggSzRyPyHbwfz4vXH2mbskVfy4DDc3vpPFksxzczqEeevbVYf15j48QbzsjjJtJPNfaoW",
  "key1": "31YwBWv5dDx3bNuFxMBHzRU9gvnigS9JiDqRWAqvLFYvaStYVwPY7BCXyukSxd2S65DEf8WkYq4RHKJdPvRGpbgJ",
  "key2": "4vkGhzDDxciwy2zpJxKxT3SDbLHF1gKaYJMWBABXFBpAbQytMStPd6Rfmsb2SUUzjSh6rTo2nZ7Z8GZsstanhXYJ",
  "key3": "dCzoFEXGm6kjKsvLfGN2PpMEeBkxNysDsgXZgVHsnbfRi5f3dCFWDhTuFaZaZ9CqVhyN2F4KAcccQ7xPug2jGqL",
  "key4": "2hDnjPrPQbxP5okBh71EJyWZqJFaCfmzYuBhqi5tabRPNFT82BobTkorp4rqH2smW5eKccL8kMvVMotfwyfiXdj4",
  "key5": "3TJ6PbXVvACzbp3mHrKXsLL6JKM3f3HY4a27BnLXFfdGHyQgVbZhLsUiEntBzRjKuwXmikUzw5RtriMeYSHm6YeF",
  "key6": "2VUHrDXo9MaswEvr8A63vkLvheXCB46VBPUBuQz199SZpYHWdAzhvJ36cMa2Yn7vKFNtWGWBZQwfGb2pbcrVDUwP",
  "key7": "2EuZHYYdkxZY6QjokgzZf2ZandfuasdEUGxzKJbocGotJcstAtSaJiW3tP67itQkBiVuGi9bmNhmH3SbMMcucmEM",
  "key8": "3Tm4chF4BVCedFSyumZbFKsUYdery27fiMVrs7q7TSgpwbbtomVA3max7ZQPgB6BkgtpEzkpzBDDMGEoJqbccR3p",
  "key9": "3DbFEb9FnYDH5ku6KwThxy2syo34g9FZMcLLhcJdGZpiUyknFqMq3GAU1UFffniRDpCMtG57zCbp7N1rPJ2PCU63",
  "key10": "4EZND23obMa8AZTTD812snahd6fTXVn51xMztiuh7VPn4nURDtAoi89qhdZEkyBXqLQGmvY98WwtaDbPa7yFj3tk",
  "key11": "3DJFPuRDVYNnHc8Qsm7opnNMT3Y7P4kDeoMfCs6crqXHWXWx3AssrbReUZAhECUVNbsiJ4n7U52C1qvgWd4oMMRh",
  "key12": "5hV19NBosio75ZcURw3xGD7so4PBDjSVoErA943iHwY2L6ZcM1x4q8aFoPCsgupraxWhMbYstjeD3LEyS4fCyVB1",
  "key13": "2wW7q5bCHRjusHwpfDwtVPCyAa3Mg9H23qPe3fPHuJfV4PSYqiuqRwtjERuqK1fRRQuqjbom8b1egnLxinxgqx9e",
  "key14": "3SZzhqvFXoJuuVYRG1yExvoUXWG5WGfWFri9Tq7ijCfyCpHPEBw9Xv13PxeFKpFuFRZuVuJ5ovMy6SzoyeXoRSR7",
  "key15": "4mZ7H6NxR18ZGZR71v6J4qJa1C9ZZn1A8Mac7bVXNdymtzPodyqG6xNYkydV43DQ5iLSKWkW37N5Re9D6qdTu7pS",
  "key16": "u7VGwCAWQyZg5m8kyZ2kwfcqvfjENUMHKhQxitzeVLWcU78icVE8YADVrXEMQfz5FVWbXwAt3XqAy6LgoXgv3iv",
  "key17": "3uKBVWxbFkZncMxe2hs6wNbx4FzsJpfbSc8e5aE8ocTLwpax99t28R8SdcnFzKPRntqYGZEYJF9W6GzPpFbezX52",
  "key18": "37pmTTYHcCLHTghBTQL9vu9YzWjeMzH57dBed6VcBo9Ntto2eoLRN9kmRaN64b2TS9ibdbvgbNY443uJk6UxUoJz",
  "key19": "ZeCtDH6XK7yvTEFcsdoXcdUX16wjQ1et4xovGd2tZBVB7mJfvnPHwAVZH9uWrBhqMV1KZGRaSfQxtik8hB8gyZj",
  "key20": "ZiybomS4mPRyFkvboQeStw5GPo9iQFPSnKKuB6VQ9z5ZR7Ht9ScxmUiSyKL3U9oN6jPYqhuzmPUCWGRJxJB94sU",
  "key21": "5jdohXaroK9FaRTeSxFd9UuzwoBoizkgcg5SfTuvJs7ZhPNHGZxQCkJxVYaim36Wy3gPUjUovEtuUvazqYyqzEif",
  "key22": "2pmsuhUZpGVH8vDmVEVHsywcMDN8HHcfvNrcyfp2qcdkxgfAyVpGpLCGB92SdjiYxVsyTuQKA1cZwiKBLzcsMQsZ",
  "key23": "2UzbUUMxkJaRBv6bMaPpv9Xf6qvD4DbLpuwDbvhfEczJo4KKidTKyq5vzfpvyC1vHfSvtYheyF62K3ByEDDV6kSt",
  "key24": "3F2rLLTngHKrtzKcXerj4K3cAKEeYZfan9683483pJsCGNJCwjk7FqAqBxAKhge5WnJDjQSy7chhBh1VCjLvgTP9",
  "key25": "4nW5wPBJTUGUoJ1jrGcqgip4XjRXUwoYntpMKjo72CPMABLfPjFgSSeXva3tX4qD9co2ZGWnXkR51b1hXV6kjfv4",
  "key26": "2bCLMxo3s7JugXHEqP9L7CJgdxEVi3aM1piB4kEgzw3cidBmnaBFgDtjWz6YhBxJWpmpZPPSzyMSx223qodvDFfU",
  "key27": "5aGPMdG4HrPiFTyfBbrviyYuCKew5ePgJk4hd8DqenGE5gzwGuERLFzfS7fPPLnjZpoFhSvpUGjjXUPbqfWwfSvb",
  "key28": "5LroCkxf2FLe7h2eJVpr1r32L1CMA6KvEZkwncUmCVj3BBJF7RaAsGZkDr9VEA9jHB6y2ZzGfCrPurrdJbFMEVch",
  "key29": "27Q97vwthD73d7pBkZcW7zsW5vfYgnZoHhdbYur9UCx7oXTDoEjnQWwLaJuj9sSEqkqk29CfRFSuUbjQJG54bb53",
  "key30": "26viaazRpbnJH7KqsNX7UiM61aMyt9DdpBrq8EDkbQ4SSEVUEqrPRmbHMB1rTcd9AiyPd3sDfyJ3gnoXywTmVU9Y",
  "key31": "hE57N9q5tv1N9Excan7HgrwAsJdR6KWWFuJwT5AGF2mSWyHGc69RMayXLGLm9G7ebUQntFKtVaAMYpo1V921Te3",
  "key32": "2BgivV8eRBAbJW1ZfbGo8GUT4sUo17tB1uqipnAvxcZoB7gC7BRc3Aivgr6aTkHniWT9617zR58LUEju4BATn2oL",
  "key33": "5UE9125cKUW5kofnQgzpmeoSaxwKwLCEWS5cbZBeqM7ffQwJux1NM9JrQaURn2sjgHcXDapYZkqVrGb4Tmck1Ud5",
  "key34": "ZEMmDntxqSzBiRu4bNzXdyqLqyj63Avb73xSbarRgioyvoX3jhKi2q9K8k7dCnJkXL9Umo4ZtZiwmqNAzgaLjrQ",
  "key35": "4gFz7L7kMt2BezJG4taN7ECW42sJBu9udVf6fTF3C2sB9RcRUkg9KQYgdW9YrWEURHnDBitz2j9scGvLFLXPVyWK",
  "key36": "4pT59yXqSrdwRGMhGPYjxafEyvjpgA86DEv7RbTciKpdSmY2sH7ag1YvoeALGLhLzyUZjiEJCE5WksNNmPhH9srb",
  "key37": "4qQ19cbkbhZDQcvuCPAzuguNNHoqgAHPMzZc2ZPmdLN1gmdsTzQt7aaH9r5vFtaYMWtsLkHeuBou2aMEabZZ3Xz6",
  "key38": "2VAEduCj914quv1xwUe7kn7uP6TKkAmCfXFNLE87naN7KppSUffg1PRFJDh8KCfgvrq5hQfweP5KLxvRKPiK4ntu",
  "key39": "348hes6dZcCLKuAtHeskyACVWMBQYgnQkZs5jHD5M5XRahmWyoM6S9LmcfHdDC4sD1gEFUoDye6QwGU7t3ecEz5z",
  "key40": "4TK1Ko5MZPcfBDCjqufyVKT8heb7imD2bTmR3qX52hsXSatrYh1H35qzcxwnmetrsRRhrCsnNfj4uxYyxc7cRtEy",
  "key41": "38yshF4vFuzccnVTxz9s8eF2njJqx5zkqg1dAsX5WQ5yQGRK5xhZE9b584Tj9GUftthn8W8zD2d1qkgQRsMccKU1"
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
