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
    "25MtDrZffUfptNoHRwCkKCemAu7M4g9JNo9FLEBSRpwcFM9qUfqSPdPj4U4quTe8RAVsatz695Q3fg9cirhQFeaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKuJNjWGfErMaVBq9LfD6TNQVUAhFAqGeBmmvrXVb9GPo6swA4EHBwmUMTygsqZ4yz4AAKo7z4gDz3PqYs2W5Ev",
  "key1": "66drcx2t45TJpqgokrUuvibfo3niHUhSUq2wJN1sp7uWkht4V9358TdMQbFeyziVCdNW7J1WofJycvZBJGGa67uy",
  "key2": "2f7nsZoxmfT34R6iafhc3vWskozGtZLW3mL72z352jr87AgUHkVLRjJ2M7CqnRim4yv3CivwCiZE96MEXtxnik5x",
  "key3": "32XiS95w7YBDtsbxBPJEZacCvsesoXPHPJ9fB7pGxsSFSGgJ9P6wWe5JsTFe2sC9f5qTttw1CPFYhSgdy2DKGKQ4",
  "key4": "i9By1Z4MwFqXeUTPF2b4r8FxFS9zsojVoTuu2qg4pnSw5nUmURGzenVaPQQ2N42DBVmACdNMkUz128EhQAyMRD7",
  "key5": "w7eM8xe1a7fPyucerjDms4MYUXQA12yDcr8oQdaJaHuFFgaZH9QbbTAzEyfRUWi1CLoxZLCGSEg3pLSq8SC5yLD",
  "key6": "3TK1pCTY6kce4KvjzrsuoAYgQSrD87w36W2EAzVKULDBmeYVY1DVmgpTaYB78WXEus7wihUhXRLkDimXsL1NiGik",
  "key7": "48QoqxxoNHVqmSgsebZjxGJgQpEUyjiwo7DWsaxiggiDQ3rKTLMkezDZzKvCrck7Y9LjT9LWsTpMudT7Pjh1oPJF",
  "key8": "5gtGUqGrZx6XcrTa9F9R1Xy8wsaDgQTd884fNAHU4deimUz2vJJ1PTsgcn73uxiBq9gCDwSEC8YEWETMyfyBh8h5",
  "key9": "4oXDdSTqoCZqE3BAgVVDg8fnivCi9J5xNDFgkELo8WLr7o3usSqbE6NvHGyBhadd2qyGQ22tjByKrpgjkL6dQfjg",
  "key10": "32hFrMiLL5CEczHcMCWC6HDqcwfuoDpmpWjj8PoF55kbPSdGXRkWBaFwjpfmNTQuFwysAkymu1hUrXuPVgHwwnhm",
  "key11": "4qzJEuchWmHrAGF5yUBuSTgFu26MqeM7Pgbfe5p8BLMmEuHQDwn738gtsENjc52q5CKZfNAkqpNxd3dF1veecVRp",
  "key12": "4aM7uRDze9SNEPzxKFYDgaGTqVDvNeyY1d96Tno1oZdtLbrTsyNHEJnMLeCvijh5NiaMCbusHvTLG9A1i6PWA8kB",
  "key13": "tzGthu3DZG2FGBechyLUytZMdia9h7YfwazDQovbcbycDoq5iGp21vHP2hbqKcGfDbVroMLpkigJJaHKpnobcFa",
  "key14": "cUEbkx5C9FyVKREVdGjehmwgz3pPMKD84X9wqMw7VtHj4n1ksTy1Cm29Kt8ErfZ61NYMKeXHUaUStXVks4dkXsN",
  "key15": "2A31QL8qwpgJHk7EJJQvcjpKfqdnjgNmbdv4cGtby9aazJgg5fs8vUBxBjQSP7bZXcYmuqnUVnkrbiePwSfHuQBW",
  "key16": "kx7jLnPkK92i4hPJiGXbFYgo8kaK9AHfHCVcg3soG7NNqUcv6GFzLywoSnhBQ14L6NrCmSeR4jJTGA8RbXUfDg8",
  "key17": "4vjK9knxutDiXccvfZpogg7EpGxtEmZwNc3TpYKRZHJjE9bdDSCP1Mp3WN1dHiVWeqfQ4ycLhopZHpqsZogktVtG",
  "key18": "5bdioRxL3hSSkLxdMuouNgEXKV975XFiAb1hLT6Gg2TC4xs3PMjNqKZSHdv7Zv625VPoewa3Vpvha41VXWoQLZoW",
  "key19": "44Udm4XsD32BH7q8iTkVC3fhtregCgo9cUMrG8Mt6zDa5UyWoGGAfqpraJGxHt1yghg6kRQzBRVMbN68F53nBsoD",
  "key20": "5AH6ym86cXQmeCJc6ujqTgDeBhJeFK3Nw1LHYoc7NiTCkPxiQYTX57wKXgAUvm3FZg6aeS6g4H4qEyMCmjCmy76W",
  "key21": "3qE2FJBUhze8XHGkKBvXexRaV153T4GVUw5go1auCWb6jzbB8Gk3Fij3GX1XeKtoQgPSLM47UJzySUetvpr22Y1E",
  "key22": "3s4fKRWDRtoQ6P2cjdYutyaoPvrKMA6eNQff2dsZB4Cs8GYwoVgDDRvieETwTt6h694owcNnZCbCax4RSPzaTDHk",
  "key23": "2bTGWHK5Eywb2DUaNmuzN8fRr74iPHNpq92eZRpBb3xQx3KQiFFLNwUaBJRj6mbpc5Uk2uDzL4TgHorwMUX3MSvW",
  "key24": "4RmpnwkvK1b429CLfbMQ9UZPhJxRmQ8aMWYB5cXEgxUAGDZErqbJ2wkLdcfCnfsAZyb3B6dSW8ukc1XkxBBADUG2",
  "key25": "LD8uTNFuv3kRHAvb7J3L7CtpZS6LPMAxqH7zmHmXLoTLmoPcUVKHCxEi3CqYfdM56eJKc7vWxU635QjFuQ2nLL4",
  "key26": "5FPvVSV6Z7ezhfuXzGM4MNKo2b5MDmezQHhKVME7vpQBTHuaUqfrc9QwJLhvLeMmNZNDp4wGWfR9HvoATrwa97Kg",
  "key27": "3aUbuaRjFpyNQgahk45eYJQ5DMm9jd378gVMUCJpBbfYrMPAxU3qsTXGwa1uDQXdKub3bm1Zs6ghRYZ9tjW7jsy1",
  "key28": "5ZVQpAzosuyjEkEuPddXnB278PqFEs4UG4faJLsif2P1z4a6Sn4VTxZLUsaC3sQpTD5UmwmbBXPvwTsXx57yUkcb",
  "key29": "GGBtim14dsAzzkP6obnGW4JdDWqGmC5gj6fPjQYB7x3umVWHPzPvf2aHwAxcgPcEJNfFxkwzcPo2n54nbF4bYGJ",
  "key30": "2MKcm1613WuCjL6WqD1sQFVmmK4XsgcMAx8j9B7szfL95biUZHkvZ36akCMtSfapRwiXWKxbZGQK8brpLXf5AgKe",
  "key31": "5MwXMzKPaJngfZwtRiUWryJ8UG3GrNAAsXpWAAXhwAeye6mZaGjYA3q1z4QQiTLsiFmEyRCVQvsAzAxLVBCBJbrJ",
  "key32": "5zfeSiq9qSJoKN8Wzp3jHNQZqV6UgDQKhq2A2DgpGTFRD6o56LHHDs4dmDY16TbueKCdPh1NYYH7H2Uwv4QJ2jtB",
  "key33": "4eaKXJShA36QaXxLmCeJiM9z3t8PoZnT6U25vkHU86wJEHjxPBBBGzS4W8NodxjieH5XXezh4pUQmAVP3hHGwTMT",
  "key34": "EzYmMptZBZfwSs1Co89C5U1midxN7Tw2PbaW9EwQQzL4kdFDwdMy9YVCq1r3NVNVsGQBDGqbEP8nMRp7u7PSfwC"
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
